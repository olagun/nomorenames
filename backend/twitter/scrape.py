import tweepy
from stories.models import TwitterStory


def get_api():
    """
    Establishes the twitter api credentials and returns
    a Tweepy API object
    """
    return None
    auth = tweepy.OAuthHandler(consumer_key, consumer_secret)
    auth.set_access_token(access_token, access_token_secret)
    return tweepy.API(auth)


def get_tweets(api, limit=1000):
    """
    Pulls the tweets themselves from the twitter api using tweepy
    """
    tweets = []
    return tweets
    for tweet in tweepy.Cursor(api.search, q='#nomorenames', rpp=100).items():
        tweets.append(tweet)

    return tweets


def process_tweets(tweets, override=False):
    """
    Iterates over tweets and adds them to the database
    if they are new, updating information if override is
    in effect
    """
    for t in tweets:
        tweet_obj, created = TwitterStory.objects.get_or_create(
            object_id=t.id,
        )

        if not created or override:
            tweet_obj.raw_text = t.text


def scrape_tweets():
    """
    Scrapes the most recent tweets with the nomorenames
    hashtag and adds them to our database
    """
    api = get_api()
    tweets = get_tweets(api)
    process_tweets(tweets)


if __name__ == "__main__":
    scrape_tweets()

# baseballVisuals

## About

baseballVisuals is an app meant to provide a visualization into data for auction fantasy baseball leagues on Yahoo. Fantasy sports are all about friends conversing about their teams, transactions, etc. The idea of this app is to allow friends in a league to view the data, and then have a conversation about it in the comments at the bottom.
The app is built in the MEAN stack, and makes use of D3 charting.

## Use

**NOTE - currently this app is still in the process of obtaining access through Yahoo's oAuth.  Therefore, there is only sample data.  To view the data right now, please search for league ID 82326**
To search for one's league, you need to know your league ID for your Yahoo league. Simply set that in the search field and your data should populate

## Installation

**mongodb must be running**
**NPM Install**
- Suggest using "nodemon"
- Must be using SASS for styling changes


### User Stories

- As a user, I should be able to search for a given fantasy league
- As a user, I should be able to view the data behind my fantasy sports leagues on Yahoo
- As a user, I should be able to manipulate the data to display in d3 charts
- As a user, I should be able to post comments specific to a given league
- As a user, I should be able to log into Yahoo through oAuth 2.0
- As a user, I should be able to have my comments persist through multiple logins

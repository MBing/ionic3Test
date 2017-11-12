# Sample List project Ionic

As this was made with Ionic you can use the following commands for a quick start.

```
	$ ionic lab // runs a livereload server
```

### Connecting with Firebase

1) Update `firebase.credentials.ts` with your own credentials to get started.

2) In the file `sample-list.service.ts` on line 8, 
you will need to put your database name. That is the first part of your Database URL:

    **e.g.**
    https://your-database-name.firebaseio.com -> *your-database-name*

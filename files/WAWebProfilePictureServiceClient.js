__d(
  "WAWebProfilePictureServiceClient",
  ["WAWebProfilePictureService"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return {
        requestProfilePicFromServer: function (n) {
          return e(
            o("WAWebProfilePictureService").ProfilePictureService,
            function (e) {
              return e.requestProfilePicFromServer(n);
            },
          );
        },
        sendSetPicture: function (n, r, a) {
          return e(
            o("WAWebProfilePictureService").ProfilePictureService,
            function (e) {
              return e.sendSetPicture(n, r, a);
            },
          );
        },
        requestDeletePicture: function (n) {
          return e(
            o("WAWebProfilePictureService").ProfilePictureService,
            function (e) {
              return e.requestDeletePicture(n);
            },
          );
        },
      };
    }
    l.profilePictureServiceClient = e;
  },
  98,
);

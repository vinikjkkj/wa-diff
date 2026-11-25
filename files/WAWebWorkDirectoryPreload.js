__d(
  "WAWebWorkDirectoryPreload",
  [
    "WAWebCanonicalGating",
    "WAWebCanonicalUtils",
    "WAWebWorkDirectoryContactNames",
    "WAWebWorkDirectoryFetchMembersJob",
    "WAWebWorkFeaturePolicy",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      var e = !1,
        t = function () {
          e = !0;
        };
      return (
        o("WAWebWorkFeaturePolicy").isWork() &&
          (o("WAWebWorkDirectoryContactNames").startWorkDirectoryContactNames(),
          o("WAWebCanonicalUtils").isCanonicalPresent()
            ? o(
                "WAWebWorkDirectoryFetchMembersJob",
              ).requestWorkDirectoryMembersOnce()
            : o("WAWebCanonicalGating").isCanonicalEnabled() &&
              o("WAWebCanonicalUtils")
                .waitForCanonicalPresent()
                .then(function () {
                  e ||
                    o(
                      "WAWebWorkDirectoryFetchMembersJob",
                    ).requestWorkDirectoryMembersOnce();
                })),
        t
      );
    }
    l.preloadWorkDirectoryMembers = e;
  },
  98,
);

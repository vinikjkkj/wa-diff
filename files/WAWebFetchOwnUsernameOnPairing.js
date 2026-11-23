__d(
  "WAWebFetchOwnUsernameOnPairing",
  [
    "WALogger",
    "WAWebBackendEventBus",
    "WAWebGetUsernameQueryJob",
    "WAWebUsernameWorkerCompatibleGatingUtils",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = !1,
      c = !1;
    function d() {
      (u ||
        ((u = !0),
        o("WAWebBackendEventBus").BackendEventBus.onPrimaryFeaturesSynced(
          function (e) {
            e.has("username_supported") && m();
          },
        )),
        m());
    }
    function m() {
      c ||
        !o(
          "WAWebUsernameWorkerCompatibleGatingUtils",
        ).usernameCreationOrReservationEnabled() ||
        ((c = !0),
        p().catch(function (t) {
          ((c = !1),
            o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[username] failed to fetch own username after pairing",
                  ])),
              )
              .catching(r("getErrorSafe")(t))
              .sendLogs("fetch-own-username-on-pairing-failed"));
        }));
    }
    async function p() {
      var e = await o("WAWebGetUsernameQueryJob").getUsernameJob();
      o("WALogger").LOG(
        s ||
          (s = babelHelpers.taggedTemplateLiteralLoose([
            "[username] own username updated after pairing, present=",
            "",
          ])),
        String(e != null),
      );
    }
    l.initOwnUsernameFetchOnPairing = d;
  },
  98,
);

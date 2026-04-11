__d(
  "useWAWebBizAdCreationPrefillMediaCollection",
  [
    "fbt",
    "CometRelay",
    "FBLogger",
    "Promise",
    "WAWebAttachMediaCollection",
    "WAWebBizAdCreationCreatePrefilledMediaCollection",
    "WAWebBizAdCreationExtractPrefillMedia",
    "WAWebToast.react",
    "WAWebToastManager",
    "getErrorSafe",
    "justknobx",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = u || (u = o("react")),
      d = u.useMemo;
    function m(t, a) {
      var i = o("CometRelay").useRelayEnvironment(),
        l = d(
          function () {
            var l = {
              collection: new (r("WAWebAttachMediaCollection"))({
                chatParticipantCount: 1,
              }),
              prefillFailed: !1,
            };
            if (!r("justknobx")._("5419"))
              return (e || (e = n("Promise"))).resolve(l);
            var u = r("WAWebBizAdCreationExtractPrefillMedia")(t);
            return u.length === 0
              ? (e || (e = n("Promise"))).resolve(l)
              : r("WAWebBizAdCreationCreatePrefilledMediaCollection")(u, {
                  environment: i,
                  legacyAdAccountID: a,
                })
                  .then(function (e) {
                    return { collection: e, prefillFailed: !1 };
                  })
                  .catch(function (e) {
                    return (
                      r("FBLogger")("wa_ctwa_web")
                        .catching(r("getErrorSafe")(e))
                        .mustfix(
                          "usePrefillMediaCollection: prefilling failed",
                        ),
                      o("WAWebToastManager").ToastManager.open(
                        c.jsx(o("WAWebToast.react").Toast, {
                          msg: s._(/*BTDS*/ "Failed to load media."),
                        }),
                      ),
                      {
                        collection: new (r("WAWebAttachMediaCollection"))({
                          chatParticipantCount: 1,
                        }),
                        prefillFailed: !0,
                      }
                    );
                  });
          },
          [t, i, a],
        );
      return l;
    }
    l.default = m;
  },
  226,
);

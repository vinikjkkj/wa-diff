__d(
  "WAWebProfilePicLoadError",
  ["WALogger", "WAWebMmsClientIsErrorRetryable", "getErrorSafe"],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e, t, n) {
      e: {
        var r = t;
        if (r == null || r === 403 || r === 404) {
          (e.markStale({ eurl: !0 }), u(e, n));
          break e;
        }
        if (r === 410) {
          e.markStale();
          break e;
        }
        {
          var a = r;
          o("WAWebMmsClientIsErrorRetryable").isRetriableStatusCode(a) &&
            e.markMms4HostFailure();
          break e;
        }
      }
    }
    function u(t, n) {
      var a;
      n.current ||
        ((n.current = !0),
        (a = t.validate()) == null ||
          a.catch(function (t) {
            o("WALogger")
              .WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "handleProfilePicLoadError: revalidation failed",
                  ])),
              )
              .catching(r("getErrorSafe")(t));
          }));
    }
    l.handleProfilePicLoadError = s;
  },
  98,
);

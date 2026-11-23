__d(
  "WAWebSwFeature",
  ["WALogger", "WAWebBoolFunc", "WAWebBuildConstants", "err"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = new RegExp(
        "(" +
          self.registration.scope +
          "|" +
          o("WAWebBuildConstants").DYN_ORIGIN +
          "|https://dyn.web.whatsapp.com/)([^?]*)(?:\\?(.*))?",
      ),
      u = (function () {
        function t(e, t) {
          var n;
          ((this.matchFetch = (n = o("WAWebBoolFunc")).returnFalse),
            (this.matchAction = n.returnFalse),
            (this.matchInstall = n.returnFalse),
            (this.matchActivate = n.returnFalse),
            (this.matchPush = n.returnFalse),
            (this.matchNotificationClick = n.returnFalse),
            (this.matchNotificationClose = n.returnFalse),
            (this.matchPeriodicSync = n.returnFalse),
            (this.cache = e),
            (this.store = t));
        }
        return (
          (t.parseUrl = function (n) {
            var t = n.match(s);
            if (t) {
              var a;
              if (t[3]) {
                var i = {},
                  l = new Set();
                (t[3].split("&").forEach(function (t) {
                  var a = t.split("="),
                    s = a[0],
                    u = a[1],
                    c = s.toLowerCase();
                  if (l.has(c))
                    throw (
                      o("WALogger").ERROR(
                        e ||
                          (e = babelHelpers.taggedTemplateLiteralLoose([
                            "Unexpected duplicated query param: ",
                            "=",
                            " in the url: ",
                            "",
                          ])),
                        s,
                        u,
                        n,
                      ),
                      r("err")("Detected url with duplicated query param")
                    );
                  (l.add(c), (i[s] = u));
                }),
                  (a = i));
              }
              return { base: t[1], relativePath: t[2], queryParams: a };
            }
          }),
          t
        );
      })();
    ((u.RequestType = { GET: "GET" }), (l.SWFeature = u));
  },
  98,
);

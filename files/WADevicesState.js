__d(
  "WADevicesState",
  [
    "WAFetchAndSaveDevices",
    "WAFetchFbDevicesProtocolV2",
    "WAResolvable",
    "WAResultOrError",
    "WATagsLogger",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d = 3e4,
      m = 1e3 * 60 * 60,
      p = o("WATagsLogger").TAGS(["WADevicesState"]),
      _ = (function () {
        function t() {
          this.$1 = new Map();
        }
        var n = t.prototype;
        return (
          (n.$2 = function (t) {
            var e = this;
            (setTimeout(function () {
              t.forEach(function (t) {
                var n = t[0],
                  r = t[1];
                r.resolveWasCalled() ||
                  (r.resolve(o("WAResultOrError").makeError()),
                  e.$1.get(n) === r && e.$1.delete(n));
              });
            }, d),
              setTimeout(function () {
                t.forEach(function (t) {
                  var n = t[0],
                    r = t[1];
                  e.$1.get(n) === r && e.$1.delete(n);
                });
              }, m));
          }),
          (n.waitForUserDevices = async function (n, r, a) {
            var t = this;
            a === void 0 && (a = !1);
            var i = [],
              l = [];
            (a === !0 &&
              n.forEach(function (e) {
                t.$1.delete(e);
              }),
              n.forEach(function (e) {
                var n = t.$1.get(e);
                if (n == null) {
                  var r = new (o("WAResolvable").Resolvable)();
                  (i.push([e, r]), t.$1.set(e, r));
                } else l.push([e, n.promise]);
              }),
              this.$2(i),
              p.LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "getDevices called for users ",
                    ", reason: ",
                    "",
                  ])),
                Array.from(n),
                r,
              ));
            var d = await o("WAFetchFbDevicesProtocolV2")
                .fetchFbDevicesProtocol(
                  i.map(function (e) {
                    var t = e[0];
                    return t;
                  }),
                  a,
                )
                .catch(function (e) {
                  return (
                    p.ERROR(
                      s ||
                        (s = babelHelpers.taggedTemplateLiteralLoose([
                          "fetchFBDevicesProtocol failed: ",
                          "",
                        ])),
                      e,
                    ),
                    new Map()
                  );
                }),
              m = !0;
            (p.DEV(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "getDevices -> update devices signal",
                ])),
            ),
              await o("WAFetchAndSaveDevices")
                .updateUsersDevicesSignalAndDB(
                  Array.from(d.values())
                    .map(function (e) {
                      return e.newState;
                    })
                    .filter(Boolean),
                )
                .catch(function (e) {
                  ((m = !1),
                    p.ERROR(
                      c ||
                        (c = babelHelpers.taggedTemplateLiteralLoose([
                          "updateDevicesSignalAndDB failed: ",
                          "",
                        ])),
                      e,
                    ));
                }),
              i.forEach(function (e) {
                var n = e[0],
                  r = e[1];
                if (!m) {
                  (r.resolve(o("WAResultOrError").makeError()), t.$1.delete(n));
                  return;
                }
                d.has(n)
                  ? r.resolve(o("WAResultOrError").makeResult())
                  : (r.resolve(o("WAResultOrError").makeError()),
                    t.$1.delete(n));
              }),
              await Promise.allSettled(
                l.map(function (e) {
                  var t = e[0],
                    n = e[1];
                  return n;
                }),
              ));
          }),
          (n.reset = function (t) {
            var e = this;
            t.forEach(function (t) {
              return e.$1.delete(t);
            });
          }),
          t
        );
      })(),
      f = new _();
    function g() {
      return f;
    }
    l.getDevicesState = g;
  },
  98,
);

__d(
  "WAWebBizAISettingsVersionCollection",
  [
    "WALogger",
    "WAWebBizAISettingsCategoryRegistry",
    "WAWebBizAISettingsVersionModel",
    "WAWebStaleBaseCollection",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = (function (t) {
        function r() {
          for (var e, r = arguments.length, a = new Array(r), i = 0; i < r; i++)
            a[i] = arguments[i];
          return (
            (e = t.call.apply(t, [this].concat(a)) || this),
            (e.findImpl = (function () {
              var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (t) {
                  var n,
                    r,
                    a = o(
                      "WAWebBizAISettingsCategoryRegistry",
                    ).getCategoryHandler(t);
                  if (a == null) return null;
                  yield a.fetch();
                  var i = e.get(t);
                  return {
                    id: t,
                    version:
                      (n = i == null ? void 0 : i.version) != null ? n : 0,
                    updatedAtMs:
                      (r = i == null ? void 0 : i.updatedAtMs) != null ? r : 0,
                  };
                },
              );
              return function (e) {
                return t.apply(this, arguments);
              };
            })()),
            babelHelpers.assertThisInitialized(e) ||
              babelHelpers.assertThisInitialized(e)
          );
        }
        babelHelpers.inheritsLoose(r, t);
        var a = r.prototype;
        return (
          (a.handleNudge = function (n, r, a) {
            var t,
              i,
              l = String(n),
              u = this.get(l);
            if (u != null && u.version >= r && u.updatedAtMs >= a) {
              o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[BizAI] nudge cat=",
                    " up-to-date (local=v",
                    "@",
                    " >= in=v",
                    "@",
                    ")",
                  ])),
                l,
                u.version,
                u.updatedAtMs,
                r,
                a,
              );
              return;
            }
            var c = (t = u == null ? void 0 : u.version) != null ? t : 0,
              d = (i = u == null ? void 0 : u.updatedAtMs) != null ? i : 0;
            o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[BizAI] nudge cat=",
                  " stale (local=v",
                  "@",
                  " < in=v",
                  "@",
                  ")",
                ])),
              l,
              c,
              d,
              r,
              a,
            );
            var m = this.gadd({ id: l, version: r, updatedAtMs: a });
            m.markStale();
          }),
          (a.incrementVersion = function (t, n) {
            var e,
              r = String(t),
              o = this.get(r),
              a = ((e = o == null ? void 0 : o.version) != null ? e : 0) + 1;
            return (this.gadd({ id: r, version: a, updatedAtMs: n }), a);
          }),
          (a.getByCategory = function (t) {
            return this.get(String(t));
          }),
          r
        );
      })(o("WAWebStaleBaseCollection").StaleBaseCollection);
    u.model = o("WAWebBizAISettingsVersionModel").BizAISettingsVersionModel;
    var c = new u();
    l.BizAISettingsVersionCollection = c;
  },
  98,
);

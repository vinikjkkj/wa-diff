__d(
  "WAWebBizAISettingsVersionCollection",
  [
    "WALogger",
    "WAWebBizAISettingsCategoryRegistry",
    "WAWebBizAISettingsVersionModel",
    "WAWebStaleBaseCollection",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = (function (t) {
        function n() {
          for (var e, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          return (
            (e = t.call.apply(t, [this].concat(r)) || this),
            (e.findImpl = async function (t) {
              var n,
                r,
                a = o("WAWebBizAISettingsCategoryRegistry").getCategoryHandler(
                  t,
                );
              if (a == null) return null;
              await a.fetch();
              var i = e.get(t);
              return {
                id: t,
                version: (n = i == null ? void 0 : i.version) != null ? n : 0,
                updatedAtMs:
                  (r = i == null ? void 0 : i.updatedAtMs) != null ? r : 0,
              };
            }),
            babelHelpers.assertThisInitialized(e) ||
              babelHelpers.assertThisInitialized(e)
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var r = n.prototype;
        return (
          (r.handleNudge = function (n, r, a) {
            var t,
              i = String(n),
              l = this.get(i);
            if (l != null && l.version >= r) {
              o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[BizAI] nudge cat=",
                    " up-to-date (local=",
                    " >= in=",
                    ")",
                  ])),
                i,
                l.version,
                r,
              );
              return;
            }
            var u = (t = l == null ? void 0 : l.version) != null ? t : 0;
            o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[BizAI] nudge cat=",
                  " stale (local=",
                  " < in=",
                  ")",
                ])),
              i,
              u,
              r,
            );
            var c = this.gadd({ id: i, version: r, updatedAtMs: a });
            c.markStale();
          }),
          (r.incrementVersion = function (t) {
            var e,
              n = String(t),
              r = this.get(n),
              o = ((e = r == null ? void 0 : r.version) != null ? e : 0) + 1;
            return (
              this.gadd({ id: n, version: o, updatedAtMs: Date.now() }),
              o
            );
          }),
          (r.getByCategory = function (t) {
            return this.get(String(t));
          }),
          n
        );
      })(o("WAWebStaleBaseCollection").StaleBaseCollection);
    u.model = o("WAWebBizAISettingsVersionModel").BizAISettingsVersionModel;
    var c = new u();
    l.BizAISettingsVersionCollection = c;
  },
  98,
);

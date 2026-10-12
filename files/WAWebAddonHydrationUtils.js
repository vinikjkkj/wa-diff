__d(
  "WAWebAddonHydrationUtils",
  [
    "WALogger",
    "WAWebAddonConstants",
    "WAWebAddonCrossWindowUtils",
    "WAWebAddonDBTable",
    "WAWebAddonPerfUtils",
    "WAWebAddonPluginProcessor",
    "WAWebAddonProcessMsgsUtils",
    "WAWebAddonSelectUtils",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebUserPrefsHistorySync",
    "WAWebWid",
    "asyncToGeneratorRuntime",
    "compactMap",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = {},
      u = {};
    function c(e) {
      var t,
        n = e,
        r =
          n.length &&
          ((t = o("WAWebUserPrefsHistorySync").getHistorySyncStatus()) == null
            ? void 0
            : t.recentCompleted) === !0 &&
          n[0].type !== o("WAWebMsgType").MSG_TYPE.REACTION;
      return (
        r &&
          (n = e.filter(function (e) {
            var t;
            e.type === o("WAWebMsgType").MSG_TYPE.PIN_MESSAGE
              ? (t = e.id.remote)
              : (t = o("WAWebAddonProcessMsgsUtils").getParentMsgKey(e));
            var n = o("WAWebAddonCrossWindowUtils").getAddonProcessorType(e);
            return p(t, n) || f(t, n);
          })),
        n
      );
    }
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = t.hydrationType,
            a = t.ids,
            i = function (t) {
              (s[n] || (s[n] = new Set()), !p(t, n) && s[n].add(t.toString()));
            },
            l = a.filter(function (e) {
              return !p(e, n);
            });
          if (l.length !== 0) {
            _(l, n);
            var u;
            try {
              var c,
                d = o("WAWebAddonSelectUtils").getTableModeByMsgType(n),
                m;
              if (n === o("WAWebMsgType").MSG_TYPE.PIN_MESSAGE) {
                u = yield o("WAWebAddonPerfUtils").createAddonQplMarker(
                  o("WAWebAddonPerfUtils").AddonQplMarkerType.UI,
                  {
                    mode: d,
                    type: o("WAWebAddonPerfUtils").AnnotationRequestType
                      .BulkGetByChatWid,
                    size: 1,
                  },
                );
                var f = r("compactMap")(l, function (e) {
                  return e instanceof r("WAWebWid") ? e : null;
                });
                m = yield o(
                  "WAWebAddonDBTable",
                ).addonInternalDBTable.bulkGetByChatWid(d, f);
              } else {
                u = yield o("WAWebAddonPerfUtils").createAddonQplMarker(
                  o("WAWebAddonPerfUtils").AddonQplMarkerType.UI,
                  {
                    mode: d,
                    type: o("WAWebAddonPerfUtils").AnnotationRequestType
                      .BulkGetByParentMsgKeys,
                    size: 1,
                  },
                );
                var g = r("compactMap")(l, function (e) {
                  return e instanceof r("WAWebMsgKey") ? e : null;
                });
                m = yield o(
                  "WAWebAddonDBTable",
                ).addonInternalDBTable.bulkGetByParentMsgKey(d, g);
              }
              ((c = u) == null || c.success(),
                m.length &&
                  (yield o("WAWebAddonPluginProcessor")
                    .getAddonProcessor(n)
                    .updateCollection(
                      { add: m, remove: [] },
                      o("WAWebAddonConstants").AddonProcessMode.Hydration,
                    )));
              var h = o("WAWebUserPrefsHistorySync").getHistorySyncStatus();
              (h == null ? void 0 : h.recentCompleted) === !0 && l.forEach(i);
            } catch (t) {
              var y;
              ((y = u) == null || y.fail(),
                o("WALogger")
                  .ERROR(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[Addon][Hydration] Failed to hydrate ",
                        " for ",
                        " with error, ",
                        "",
                      ])),
                    n,
                    l.map(function (e) {
                      return e.toString();
                    }),
                    t,
                  )
                  .sendLogs("hydratingAddonMsgs", { sampling: 0.01 }));
            }
          }
        })),
        m.apply(this, arguments)
      );
    }
    function p(e, t) {
      var n;
      return !!((n = s[t]) != null && n.has(e.toString()));
    }
    function _(e, t) {
      u[t] || (u[t] = new Set());
      var n = u[t];
      e.forEach(function (e) {
        return n.add(e.toString());
      });
    }
    function f(e, t) {
      var n;
      return !!((n = u[t]) != null && n.has(e.toString()));
    }
    ((l.filterAddonsByHydratedStatus = c), (l.hydrateAddons = d));
  },
  98,
);

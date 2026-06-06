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
      s = {};
    function u(e) {
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
            return (
              e.type === o("WAWebMsgType").MSG_TYPE.PIN_MESSAGE
                ? (t = e.id.remote)
                : (t = o("WAWebAddonProcessMsgsUtils").getParentMsgKey(e)),
              m(t, o("WAWebAddonCrossWindowUtils").getAddonProcessorType(e))
            );
          })),
        n
      );
    }
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = t.hydrationType,
            a = t.ids,
            i = function (t) {
              (s[n] || (s[n] = new Set()), !m(t, n) && s[n].add(t.toString()));
            },
            l = a.filter(function (e) {
              return !m(e, n);
            });
          if (l.length !== 0) {
            var u;
            try {
              var c,
                d = o("WAWebAddonSelectUtils").getTableModeByMsgType(n),
                p;
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
                var _ = r("compactMap")(l, function (e) {
                  return e instanceof r("WAWebWid") ? e : null;
                });
                p = yield o(
                  "WAWebAddonDBTable",
                ).addonInternalDBTable.bulkGetByChatWid(d, _);
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
                var f = r("compactMap")(l, function (e) {
                  return e instanceof r("WAWebMsgKey") ? e : null;
                });
                p = yield o(
                  "WAWebAddonDBTable",
                ).addonInternalDBTable.bulkGetByParentMsgKey(d, f);
              }
              ((c = u) == null || c.success(),
                p.length &&
                  (yield o("WAWebAddonPluginProcessor")
                    .getAddonProcessor(n)
                    .updateCollection(
                      { add: p, remove: [] },
                      o("WAWebAddonConstants").AddonProcessMode.Hydration,
                    )));
              var g = o("WAWebUserPrefsHistorySync").getHistorySyncStatus();
              (g == null ? void 0 : g.recentCompleted) === !0 && l.forEach(i);
            } catch (t) {
              var h;
              ((h = u) == null || h.fail(),
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
        d.apply(this, arguments)
      );
    }
    function m(e, t) {
      var n;
      return !!((n = s[t]) != null && n.has(e.toString()));
    }
    function p() {
      for (var e of Object.keys(s)) delete s[e];
    }
    ((l.filterAddonsByHydratedStatus = u),
      (l.hydrateAddons = c),
      (l.clearHydrationCache = p));
  },
  98,
);

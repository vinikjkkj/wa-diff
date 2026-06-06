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
              d(t, o("WAWebAddonCrossWindowUtils").getAddonProcessorType(e))
            );
          })),
        n
      );
    }
    async function c(t) {
      var n = t.hydrationType,
        a = t.ids,
        i = function (t) {
          (s[n] || (s[n] = new Set()), !d(t, n) && s[n].add(t.toString()));
        },
        l = a.filter(function (e) {
          return !d(e, n);
        });
      if (l.length !== 0) {
        var u;
        try {
          var c,
            m = o("WAWebAddonSelectUtils").getTableModeByMsgType(n),
            p;
          if (n === o("WAWebMsgType").MSG_TYPE.PIN_MESSAGE) {
            u = await o("WAWebAddonPerfUtils").createAddonQplMarker(
              o("WAWebAddonPerfUtils").AddonQplMarkerType.UI,
              {
                mode: m,
                type: o("WAWebAddonPerfUtils").AnnotationRequestType
                  .BulkGetByChatWid,
                size: 1,
              },
            );
            var _ = r("compactMap")(l, function (e) {
              return e instanceof r("WAWebWid") ? e : null;
            });
            p = await o(
              "WAWebAddonDBTable",
            ).addonInternalDBTable.bulkGetByChatWid(m, _);
          } else {
            u = await o("WAWebAddonPerfUtils").createAddonQplMarker(
              o("WAWebAddonPerfUtils").AddonQplMarkerType.UI,
              {
                mode: m,
                type: o("WAWebAddonPerfUtils").AnnotationRequestType
                  .BulkGetByParentMsgKeys,
                size: 1,
              },
            );
            var f = r("compactMap")(l, function (e) {
              return e instanceof r("WAWebMsgKey") ? e : null;
            });
            p = await o(
              "WAWebAddonDBTable",
            ).addonInternalDBTable.bulkGetByParentMsgKey(m, f);
          }
          ((c = u) == null || c.success(),
            p.length &&
              (await o("WAWebAddonPluginProcessor")
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
    }
    function d(e, t) {
      var n;
      return !!((n = s[t]) != null && n.has(e.toString()));
    }
    function m() {
      for (var e of Object.keys(s)) delete s[e];
    }
    ((l.filterAddonsByHydratedStatus = u),
      (l.hydrateAddons = c),
      (l.clearHydrationCache = m));
  },
  98,
);

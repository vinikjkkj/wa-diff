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
            return m(t, n) || _(t, n);
          })),
        n
      );
    }
    async function d(t) {
      var n = t.hydrationType,
        a = t.ids,
        i = function (t) {
          (s[n] || (s[n] = new Set()), !m(t, n) && s[n].add(t.toString()));
        },
        l = a.filter(function (e) {
          return !m(e, n);
        });
      if (l.length !== 0) {
        p(l, n);
        var u;
        try {
          var c,
            d = o("WAWebAddonSelectUtils").getTableModeByMsgType(n),
            _;
          if (n === o("WAWebMsgType").MSG_TYPE.PIN_MESSAGE) {
            u = await o("WAWebAddonPerfUtils").createAddonQplMarker(
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
            _ = await o(
              "WAWebAddonDBTable",
            ).addonInternalDBTable.bulkGetByChatWid(d, f);
          } else {
            u = await o("WAWebAddonPerfUtils").createAddonQplMarker(
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
            _ = await o(
              "WAWebAddonDBTable",
            ).addonInternalDBTable.bulkGetByParentMsgKey(d, g);
          }
          ((c = u) == null || c.success(),
            _.length &&
              (await o("WAWebAddonPluginProcessor")
                .getAddonProcessor(n)
                .updateCollection(
                  { add: _, remove: [] },
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
    }
    function m(e, t) {
      var n;
      return !!((n = s[t]) != null && n.has(e.toString()));
    }
    function p(e, t) {
      u[t] || (u[t] = new Set());
      var n = u[t];
      e.forEach(function (e) {
        return n.add(e.toString());
      });
    }
    function _(e, t) {
      var n;
      return !!((n = u[t]) != null && n.has(e.toString()));
    }
    ((l.filterAddonsByHydratedStatus = c), (l.hydrateAddons = d));
  },
  98,
);

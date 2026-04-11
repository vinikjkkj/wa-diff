__d(
  "WAWebAddonSortUtils",
  [
    "WAWebAddonCrossWindowUtils",
    "WAWebAddonPluginProcessor",
    "WAWebAddonProcessMsgsUtils",
    "WAWebAddonSelectUtils",
    "WAWebMessageAssociationConstants",
    "WAWebMsgType",
    "WAWebWid",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = s(e, t),
        r = n.nonOrphans,
        o = n.orphans;
      return { orphans: o, validAddons: r };
    }
    function s(e, t) {
      var n = [],
        a = [];
      for (var i of e) {
        var l = t.get(
            o("WAWebAddonProcessMsgsUtils").getParentMsgKey(i).toString(),
          ),
          s =
            l == null ||
            (l == null ? void 0 : l.type) ===
              o("WAWebMsgType").MSG_TYPE.UNKNOWN;
        if (
          ((l == null ? void 0 : l.futureproofType) != null
            ? (s = !o(
                "WAWebMessageAssociationConstants",
              ).orphanIneligibleFutureproofTypes.has(l.futureproofType))
            : (l == null ? void 0 : l.type) ===
                o("WAWebMsgType").MSG_TYPE.CIPHERTEXT && (s = !0),
          s)
        )
          n.push(i);
        else if (l != null) {
          var u,
            c =
              l.broadcastId != null &&
              r("WAWebWid").isWid(l.broadcastId) &&
              !!((u = l.broadcastId) != null && u.isBroadcastList());
          c
            ? a.push(babelHelpers.extends({}, i, { author: void 0 }))
            : a.push(i);
        }
      }
      return { orphans: n, nonOrphans: a };
    }
    function u(e) {
      var t = new Map();
      for (var n of e) {
        var r,
          a = o("WAWebAddonSelectUtils").getAddonTableMode(n);
        (t.has(a) || t.set(a, []), (r = t.get(a)) == null || r.push(n));
      }
      return t;
    }
    function c(e, t, n) {
      var r = new Map();
      for (var a of n) {
        var i,
          l = o("WAWebAddonCrossWindowUtils").getAddonProcessorType(a);
        if (!r.has(l)) {
          var s = o("WAWebAddonPluginProcessor").getAddonProcessor(l);
          r.set(l, { processor: s, processMode: e, tableMode: t, addons: [] });
        }
        (i = r.get(l)) == null || i.addons.push(a);
      }
      return Array.from(r.values());
    }
    ((l.collectValidAndOrphanAddons = e),
      (l.collectValidAndOrphans = s),
      (l.groupAddonsByTableMode = u),
      (l.groupAddonsByProcessor = c));
  },
  98,
);

__d(
  "WAWebDebugCommunity",
  [
    "WALogger",
    "WAWebChatCollection",
    "WAWebDBGroupsGroupMetadata",
    "WAWebGroupMetadataGetters",
    "WAWebGroupType",
    "WAWebSideNavButtonsActivityModel",
    "WAWebWidFactory",
    "vulture",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    async function c(t, n) {
      r("vulture")("XHFe1qnStp4i-8Gkbe9kJHJMtVw=");
      var a =
        n != null
          ? n
          : o("WAWebSideNavButtonsActivityModel").getLastActiveCommunity();
      if (a == null) {
        o("WALogger").ERROR(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "Debug.suspendCommunity: no jid & no active community",
            ])),
        );
        return;
      }
      var i = o("WAWebWidFactory").createWid(a),
        l = o("WAWebChatCollection").ChatCollection.get(i),
        c = l == null ? void 0 : l.groupMetadata;
      if (c == null) {
        o("WALogger").ERROR(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "Debug.suspendCommunity: no group metadata for ",
              "",
            ])),
          a,
        );
        return;
      }
      var d = o("WAWebGroupMetadataGetters").getGroupType(c);
      if (d !== o("WAWebGroupType").GroupType.COMMUNITY) {
        o("WALogger").ERROR(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "Debug.suspendCommunity: ",
              " is not a community (groupType=",
              ")",
            ])),
          a,
          String(d),
        );
        return;
      }
      ((c.suspended = t),
        await o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(i, {
          suspended: t,
        }));
    }
    function d(e) {
      return (r("vulture")("_f47FjDrerX_Xxy6NAZirMZ3Ixw="), c(!0, e));
    }
    d.doc =
      "Mark a community as suspended (defaults to last active community). Fires change:suspended on the model and persists to IndexedDB.";
    function m(e) {
      return (r("vulture")("vRTWK8Y2AFCzRcqa6GLpcacQlOE="), c(!1, e));
    }
    m.doc =
      "Clear the suspended flag on a community (defaults to last active community).";
    var p = { suspendCommunity: d, unsuspendCommunity: m };
    l.default = p;
  },
  98,
);

__d(
  "WAWebDebugCommunity",
  [
    "WALogger",
    "WAWebChatCollection",
    "WAWebDBGroupsGroupMetadata",
    "WAWebGroupType",
    "WAWebSideNavButtonsActivityModel",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    async function c(t, n) {
      var r =
        n != null
          ? n
          : o("WAWebSideNavButtonsActivityModel").getLastActiveCommunity();
      if (r == null) {
        o("WALogger").ERROR(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "Debug.suspendCommunity: no jid & no active community",
            ])),
        );
        return;
      }
      var a = o("WAWebWidFactory").createWid(r),
        i = o("WAWebChatCollection").ChatCollection.get(a);
      if ((i == null ? void 0 : i.groupMetadata) == null) {
        o("WALogger").ERROR(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "Debug.suspendCommunity: no group metadata for ",
              "",
            ])),
          r,
        );
        return;
      }
      if (
        i.groupMetadata.groupType !== o("WAWebGroupType").GroupType.COMMUNITY
      ) {
        o("WALogger").ERROR(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "Debug.suspendCommunity: ",
              " is not a community (groupType=",
              ")",
            ])),
          r,
          String(i.groupMetadata.groupType),
        );
        return;
      }
      ((i.groupMetadata.suspended = t),
        await o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(a, {
          suspended: t,
        }));
    }
    function d(e) {
      return c(!0, e);
    }
    d.doc =
      "Mark a community as suspended (defaults to last active community). Fires change:suspended on the model and persists to IndexedDB.";
    function m(e) {
      return c(!1, e);
    }
    m.doc =
      "Clear the suspended flag on a community (defaults to last active community).";
    var p = { suspendCommunity: d, unsuspendCommunity: m };
    l.default = p;
  },
  98,
);

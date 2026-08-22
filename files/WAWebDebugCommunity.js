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
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    function c(e, t) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
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
            i = o("WAWebChatCollection").ChatCollection.get(a),
            l = i == null ? void 0 : i.groupMetadata;
          if (l == null) {
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
          var c = o("WAWebGroupMetadataGetters").getGroupType(l);
          if (c !== o("WAWebGroupType").GroupType.COMMUNITY) {
            o("WALogger").ERROR(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "Debug.suspendCommunity: ",
                  " is not a community (groupType=",
                  ")",
                ])),
              r,
              String(c),
            );
            return;
          }
          ((l.suspended = t),
            yield o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(a, {
              suspended: t,
            }));
        })),
        d.apply(this, arguments)
      );
    }
    function m(e) {
      return c(!0, e);
    }
    m.doc =
      "Mark a community as suspended (defaults to last active community). Fires change:suspended on the model and persists to IndexedDB.";
    function p(e) {
      return c(!1, e);
    }
    p.doc =
      "Clear the suspended flag on a community (defaults to last active community).";
    var _ = { suspendCommunity: m, unsuspendCommunity: p };
    l.default = _;
  },
  98,
);

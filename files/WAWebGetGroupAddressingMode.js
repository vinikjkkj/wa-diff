__d(
  "WAWebGetGroupAddressingMode",
  ["WALogger", "WAWebDBGroupsGroupMetadata", "WAWebHandleMsgCommon"],
  function (t, n, r, o, a, i, l) {
    var e, s;
    async function u(e) {
      if (e.isGroup()) {
        var t = await o("WAWebDBGroupsGroupMetadata").getGroupMetadata(e);
        return t == null
          ? null
          : t.isLidAddressingMode == null
            ? o("WAWebHandleMsgCommon").STANZA_MSG_ADDRESSING_MODE.pn
            : t.isLidAddressingMode
              ? o("WAWebHandleMsgCommon").STANZA_MSG_ADDRESSING_MODE.lid
              : o("WAWebHandleMsgCommon").STANZA_MSG_ADDRESSING_MODE.pn;
      }
    }
    async function c(t) {
      var n = new Map(),
        r = await o("WAWebDBGroupsGroupMetadata").bulkGetGroupMetadata(t),
        a = [],
        i = [];
      return (
        t.map(function (e, t) {
          if (!e.isGroup()) {
            (n.set(e.toString(), null), a.length < 3 && a.push(e.toString()));
            return;
          }
          var l = r[t];
          l != null
            ? n.set(
                l.id,
                l.isLidAddressingMode === !0
                  ? o("WAWebHandleMsgCommon").STANZA_MSG_ADDRESSING_MODE.lid
                  : o("WAWebHandleMsgCommon").STANZA_MSG_ADDRESSING_MODE.pn,
              )
            : (n.set(e.toString(), null), i.length < 3 && i.push(e.toString()));
        }),
        a.length > 0 &&
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "bulkGetGroupAddressingMode: called with ",
                  " non-groups => ",
                  "",
                ])),
              a.length,
              a,
            )
            .sendLogs("get-group-addressing-mode-called-for-non-group", {
              sampling: 0.001,
            }),
        i.length > 0 &&
          o("WALogger")
            .WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "bulkGetGroupAddressingMode: ",
                  " missing metadata => ",
                  "",
                ])),
              i.length,
              i,
            )
            .sendLogs("get-group-addressing-mode-missing-group-metadata", {
              sampling: 0.001,
            }),
        n
      );
    }
    ((l.getGroupAddressingMode = u), (l.bulkGetGroupAddressingMode = c));
  },
  98,
);

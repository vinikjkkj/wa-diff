__d(
  "WAWebSyncdActionUtils",
  ["WALogger", "WASyncdConst", "WAWebProtobufSyncAction.pb", "encodeProtobuf"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    function u(e, t) {
      return JSON.stringify([e].concat(t));
    }
    function c(t, n) {
      try {
        var r = JSON.parse(n);
        return r.length < 1
          ? (o("WALogger").WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[syncd] invalid empty index for collection ",
                  "",
                ])),
              t,
            ),
            null)
          : r;
      } catch (e) {
        return (
          o("WALogger").WARN(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[syncd] invalid index for collection ",
                "",
              ])),
            t,
          ),
          null
        );
      }
    }
    function d(e, t) {
      var n = c(e, t);
      return n == null ? void 0 : n[o("WASyncdConst").MUTATION_NAME_INDEX];
    }
    function m(e) {
      var t = e.action,
        n = e.collection,
        r = e.indexArgs,
        a = e.operation,
        i = e.timestamp,
        l = e.value,
        s = e.version;
      return {
        collection: n,
        index: u(t, r),
        binarySyncAction: o("encodeProtobuf")
          .encodeProtobuf(
            o("WAWebProtobufSyncAction.pb").SyncActionValueSpec,
            babelHelpers.extends({}, l, { timestamp: i }),
          )
          .readBuffer(),
        version: s,
        operation: a,
        timestamp: i,
        action: t,
      };
    }
    function p(e) {
      var t = e.fromMe,
        n = e.id,
        r = e.participant,
        o = e.remoteJid;
      return [o, n, t ? "1" : "0", r != null && !t ? r : "0"];
    }
    ((l.buildIndex = u),
      (l.parseIndex = c),
      (l.getMutationNameFromIndex = d),
      (l.buildPendingMutation = m),
      (l.buildMessageKey = p));
  },
  98,
);

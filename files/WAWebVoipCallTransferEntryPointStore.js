__d(
  "WAWebVoipCallTransferEntryPointStore",
  ["WAWebChatCollection", "WAWebEventEmitter"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
        function t() {
          for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          return (
            (t = e.call.apply(e, [this].concat(r)) || this),
            (t.$CallTransferEntryPointStore$p_1 = new Map()),
            babelHelpers.assertThisInitialized(t) ||
              babelHelpers.assertThisInitialized(t)
          );
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.applyChange = function (t) {
            var e = t.enabled,
              n = t.isVideoCall,
              r = t.peerActiveDeviceJid,
              o = t.peerWid,
              a = t.rootCallCreatorJid,
              i = t.rootCallId,
              l = i + "|" + a;
            if (e)
              this.$CallTransferEntryPointStore$p_1.set(l, {
                rootCallId: i,
                rootCallCreatorJid: a,
                peerActiveDeviceJid: r,
                peerWid: o,
                isVideoCall: n,
              });
            else if (!this.$CallTransferEntryPointStore$p_1.delete(l)) return;
            this.trigger("change");
          }),
          (n.getForChat = function (t) {
            for (var e of this.$CallTransferEntryPointStore$p_1.values()) {
              var n;
              if (
                ((n = o(
                  "WAWebChatCollection",
                ).ChatCollection.getLatestChatForWid(e.peerWid)) == null
                  ? void 0
                  : n.id.equals(t.id)) === !0
              )
                return e;
            }
            return null;
          }),
          t
        );
      })(r("WAWebEventEmitter")),
      s = new e();
    l.WAWebVoipCallTransferEntryPointStore = s;
  },
  98,
);

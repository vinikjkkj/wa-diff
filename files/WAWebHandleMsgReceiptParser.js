__d(
  "WAWebHandleMsgReceiptParser",
  [
    "WADeprecatedWapParser",
    "WALogger",
    "WAWebAck",
    "WAWebHandleMsgTypes.flow",
    "WAWebJidToWid",
    "WAWebUserPrefsMeUser",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = {
        delivery: (s = o("WAWebAck")).ACK.RECEIVED,
        read: s.ACK.READ,
        played: s.ACK.PLAYED,
        inactive: s.ACK.INACTIVE,
        "server-error": s.ACK.CONTENT_GONE,
        sender: s.ACK.RECEIVED,
        "read-self": s.ACK.READ,
        "played-self": s.ACK.PLAYED,
        peer_msg: s.ACK.PEER,
      },
      c = new (r("WADeprecatedWapParser"))(
        "incomingMsgReceiptParser",
        function (e) {
          (e.assertTag("receipt"),
            e.hasAttr("to") &&
              e.assertAttr(
                "to",
                o("WAWebUserPrefsMeUser")
                  .getMeDevicePnOrThrow_DO_NOT_USE()
                  .toJid(),
              ));
          var t = e.hasAttr("type")
              ? e.attrEnumOrNullIfUnknown("type", u)
              : o("WAWebAck").ACK.RECEIVED,
            n = {
              stanzaId: e.attrString("id"),
              from: o("WAWebJidToWid").jidWithTypeToWid(
                e.attrJidWithType("from"),
              ),
              offline: e.maybeAttrString("offline"),
            },
            r = babelHelpers.extends({}, n, {
              ack: t != null ? t : o("WAWebAck").ACK.RECEIVED,
              ackString: e.maybeAttrString("type"),
            }),
            a = e.maybeChild("error");
          a != null &&
            a.hasAttr("reason") &&
            a.attrString("reason") === "lid" &&
            a.attrString("type") === "feature-incapable" &&
            (r.ack = o("WAWebAck").ACK.SENT);
          var i = e.maybeChild("participants");
          if (i == null) return p(r, e);
          var l = i.hasAttr("message_id");
          return l ? m(n, i) : d(r, i);
        },
      );
    function d(e, t) {
      var n = t.mapChildrenWithTag("user", function (e) {
          try {
            var t = o("WAWebJidToWid").deviceJidToDeviceWid(
                e.attrDeviceJid("jid"),
              ),
              n = e.attrTime("t");
            return {
              participant: t,
              ts: n,
              participantPn: e.hasAttr("participant_pn")
                ? o("WAWebJidToWid").userJidToUserWid(
                    e.attrUserJid("participant_pn"),
                  )
                : null,
              participantUsername: e.maybeAttrString("participant_username"),
            };
          } catch (e) {
            return null;
          }
        }),
        r = n.filter(Boolean);
      return babelHelpers.extends({}, e, {
        type: "aggregated_by_type",
        externalId: t.attrString("key"),
        receipts: r,
      });
    }
    function m(t, n) {
      var r = [];
      return (
        n.forEachChildWithTag("user", function (t) {
          try {
            var n,
              a = o("WAWebJidToWid").deviceJidToDeviceWid(
                t.attrDeviceJid("jid"),
              ),
              i = t.attrTime("t"),
              l = t.maybeAttrString("type"),
              s =
                (n = t.maybeAttrEnum("type", u)) != null
                  ? n
                  : o("WAWebAck").ACK.RECEIVED,
              c = t.hasAttr("participant_pn")
                ? o("WAWebJidToWid").userJidToUserWid(
                    t.attrUserJid("participant_pn"),
                  )
                : null,
              d = t.maybeAttrString("participant_username");
            r.push({
              participant: a,
              participantPn: c,
              participantUsername: d,
              ack: s,
              ackString: l,
              ts: i,
            });
          } catch (t) {
            o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "parseAggregateByMessageReceipt: failed: ",
                    "",
                  ])),
                t,
              )
              .sendLogs("failed-to-parse-aggregeated-by-message-receipt", {
                sampling: 0.001,
              });
          }
        }),
        babelHelpers.extends({}, t, {
          type: "aggregated_by_message",
          externalId: n.attrString("message_id"),
          receipts: r,
        })
      );
    }
    function p(e, t) {
      var n = t.hasAttr("participant")
          ? o("WAWebJidToWid").deviceJidToDeviceWid(
              t.attrDeviceJid("participant"),
            )
          : null,
        r = t.hasAttr("recipient")
          ? o("WAWebJidToWid").userJidToUserWid(t.attrUserJid("recipient"))
          : null,
        a = t.maybeAttrString("type") === "view",
        i;
      t.hasChild("list")
        ? (i = t.child("list").mapChildrenWithTag("item", function (e) {
            return a ? e.attrString("server_id") : e.attrString("id");
          }))
        : (i = []);
      var l;
      if (t.hasChild("biz")) {
        var s = t.child("biz"),
          u = o("WAWebHandleMsgTypes.flow").ActualActorsEnumType.cast(
            s.maybeAttrInt("actual_actors"),
          ),
          c = o("WAWebHandleMsgTypes.flow").HostStorageEnumType.cast(
            s.maybeAttrInt("host_storage"),
          ),
          d = s.maybeAttrInt("privacy_mode_ts");
        u != null &&
          c != null &&
          d != null &&
          (l = { actualActors: u, hostStorage: c, privacyModeTs: d });
      }
      a || i.push(e.stanzaId);
      var m = !1;
      return (
        n != null &&
          n.isBot() &&
          t.hasAttr("is_lid") &&
          (m = t.attrString("is_lid") === "true"),
        babelHelpers.extends({}, e, {
          type: "simple",
          externalIds: i,
          participant: n,
          participantPn: t.hasAttr("participant_pn")
            ? o("WAWebJidToWid").userJidToUserWid(
                t.attrUserJid("participant_pn"),
              )
            : null,
          participantUsername: t.maybeAttrString("participant_username"),
          recipient: r,
          ts: t.attrTime("t"),
          biz: l,
          isLidBot: m,
        })
      );
    }
    ((l.RECEIPT_TYPES_TO_ACK = u), (l.msgReceiptParser = c));
  },
  98,
);

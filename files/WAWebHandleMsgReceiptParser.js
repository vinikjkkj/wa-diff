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
      u,
      c,
      d = {
        delivery: (c = o("WAWebAck")).ACK.RECEIVED,
        read: c.ACK.READ,
        played: c.ACK.PLAYED,
        inactive: c.ACK.INACTIVE,
        "server-error": c.ACK.CONTENT_GONE,
        sender: c.ACK.RECEIVED,
        "read-self": c.ACK.READ,
        "played-self": c.ACK.PLAYED,
        peer_msg: c.ACK.PEER,
      },
      m = new (r("WADeprecatedWapParser"))(
        "incomingMsgReceiptParser",
        function (t) {
          if ((t.assertTag("receipt"), t.hasAttr("to"))) {
            var n;
            o("WALogger")
              .LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[handleMsgReceiptParser] to=",
                    "",
                  ])),
                t.attrString("to"),
              )
              .sendLogs("handle-msg-receipt-parser-has-to-attribute");
            var r = t.attrString("to"),
              a = o("WAWebUserPrefsMeUser").getMeDeviceLidOrThrow().toJid(),
              i =
                (n = o("WAWebUserPrefsMeUser").getMaybeMeDevicePn()) == null
                  ? void 0
                  : n.toJid();
            r !== a &&
              r !== i &&
              (o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[handleMsgReceiptParser] no device LID/PN found",
                  ])),
              ),
              t.throw(
                'to have "to"="' +
                  a +
                  '" or "' +
                  (i != null ? i : "<no mePn>") +
                  '", but instead has "' +
                  r +
                  '"',
              ));
          }
          var l = t.hasAttr("type")
              ? t.attrEnumOrNullIfUnknown("type", d)
              : o("WAWebAck").ACK.RECEIVED,
            u = {
              stanzaId: t.attrString("id"),
              from: o("WAWebJidToWid").jidWithTypeToWid(
                t.attrJidWithType("from"),
              ),
              offline: t.maybeAttrString("offline"),
            },
            c = babelHelpers.extends({}, u, {
              ack: l != null ? l : o("WAWebAck").ACK.RECEIVED,
              ackString: t.maybeAttrString("type"),
            }),
            m = t.maybeChild("error");
          m != null &&
            m.hasAttr("reason") &&
            m.attrString("reason") === "lid" &&
            m.attrString("type") === "feature-incapable" &&
            (c.ack = o("WAWebAck").ACK.SENT);
          var g = t.maybeChild("participants");
          if (g == null) return f(c, t);
          var h = g.hasAttr("message_id");
          return h ? _(u, g) : p(c, g);
        },
      );
    function p(e, t) {
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
    function _(e, t) {
      var n = [];
      return (
        t.forEachChildWithTag("user", function (e) {
          try {
            var t,
              r = o("WAWebJidToWid").deviceJidToDeviceWid(
                e.attrDeviceJid("jid"),
              ),
              a = e.attrTime("t"),
              i = e.maybeAttrString("type"),
              l =
                (t = e.maybeAttrEnum("type", d)) != null
                  ? t
                  : o("WAWebAck").ACK.RECEIVED,
              s = e.hasAttr("participant_pn")
                ? o("WAWebJidToWid").userJidToUserWid(
                    e.attrUserJid("participant_pn"),
                  )
                : null,
              c = e.maybeAttrString("participant_username");
            n.push({
              participant: r,
              participantPn: s,
              participantUsername: c,
              ack: l,
              ackString: i,
              ts: a,
            });
          } catch (e) {
            o("WALogger")
              .ERROR(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "parseAggregateByMessageReceipt: failed: ",
                    "",
                  ])),
                e,
              )
              .sendLogs("failed-to-parse-aggregeated-by-message-receipt", {
                sampling: 0.001,
              });
          }
        }),
        babelHelpers.extends({}, e, {
          type: "aggregated_by_message",
          externalId: t.attrString("message_id"),
          receipts: n,
        })
      );
    }
    function f(e, t) {
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
    ((l.RECEIPT_TYPES_TO_ACK = d), (l.msgReceiptParser = m));
  },
  98,
);

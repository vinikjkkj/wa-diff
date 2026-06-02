__d(
  "WAWebHandleWaChat",
  [
    "WAByteArray",
    "WADeprecatedWapParser",
    "WAJids",
    "WALogger",
    "WAWap",
    "WAWebBackendJobs.flow",
    "WAWebCommsWapMd",
    "WAWebDBMessageDelete",
    "WAWebHandleMsgProcess",
    "WAWebHandleMsgTypes.flow",
    "WAWebMsgCollection",
    "WAWebMsgKey",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = new (r("WADeprecatedWapParser"))(
        "incomingWAChatNotificationParser",
        function (e) {
          (e.assertTag("notification"),
            e.assertAttr("from", o("WAJids").PSA_JID));
          var t = e.attrString("id"),
            n = e.attrTime("t");
          if (e.hasChild("messages")) {
            var a = e.child("messages"),
              i = a.attrString("campaign_id"),
              l = a.mapChildrenWithTag("message", function (e) {
                var t,
                  n = e.attrString("id"),
                  r;
                if (e.hasAttr("type")) {
                  var a = e.attrString("type");
                  r = a === "text" ? e : e.child("media");
                } else r = e;
                var i =
                    e == null ||
                    (t = e.maybeChild("biz")) == null ||
                    (t = t.maybeChild("interactive")) == null ||
                    (t = t.maybeChild("native_flow")) == null
                      ? void 0
                      : t.maybeAttrString("name"),
                  l = {
                    nativeFlowName: i,
                    verifiedNameSerial: null,
                    verifiedLevel: null,
                    verifiedNameCert: null,
                    privacyMode: null,
                    campaignId: null,
                    verifiedHsmEnvelope: !0,
                  },
                  s = {
                    id: n,
                    body: o("WAByteArray").uint8ArrayToBuffer(r.contentBytes()),
                    bizInfo: l,
                  };
                return s;
              });
            return {
              type: "messages",
              stanzaId: t,
              ts: n,
              campaignId: i,
              messages: l,
            };
          }
          var s = e.child("revoke");
          s.attrString("campaign_id");
          var u = s.mapChildrenWithTag("message", function (e) {
            var t = new (r("WAWebMsgKey"))({
              fromMe: !1,
              remote: o("WAWebWidFactory").createWid(o("WAJids").PSA_JID),
              id: e.attrString("id"),
            });
            return t.toString();
          });
          return { type: "revoke", stanzaId: t, ts: n, revokeMessageIds: u };
        },
      );
    async function c(e, t) {
      var n = e.campaignId,
        r = e.ts,
        a = t.body,
        i = t.id,
        l = o("WAWebWidFactory").createWid(o("WAJids").PSA_JID),
        s = {
          type: o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.OTHER_STATUS,
          externalId: i,
          ts: r,
          edit: -1,
          isHsm: !1,
          count: null,
          chat: l,
          author: l,
          pushname: null,
          isDirect: !1,
          campaignId: n,
        },
        u = {
          retryCount: 0,
          e2eType: o("WAWebBackendJobs.flow").CiphertextType.Msg,
          encMediaType: o("WAWebBackendJobs.flow").EncMediaType.Image,
          hideFail: !1,
        };
      await o("WAWebHandleMsgProcess").processDecryptedMessageProto({
        decrypted: a,
        info: s,
        e2eInfo: u,
        bizInfo: t.bizInfo,
        hsmInfo: null,
        isPadded: !1,
      });
    }
    async function d(t) {
      var n = u.parse(t);
      if (n.error)
        throw (
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "error while parsing: ",
                "",
              ])),
            t.toString(),
          ),
          o("WALogger").ERROR(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "Parsing Error: ",
                "",
              ])),
            n.error.toString(),
          ),
          n.error
        );
      var r = n.success,
        a = o("WAWap").wap("ack", {
          id: o("WAWap").CUSTOM_STRING(r.stanzaId),
          class: "notification",
          type: "psa",
          to: o("WAWebCommsWapMd").JID(
            o("WAWebWidFactory").createWid(o("WAJids").PSA_JID),
          ),
        });
      switch (r.type) {
        case "revoke": {
          var i = r.revokeMessageIds;
          i.length > 0 &&
            (await o("WAWebDBMessageDelete").removeMessagesFromHistory(i),
            i.forEach(function (e) {
              var t = o("WAWebMsgCollection").MsgCollection.get(e);
              t && t.delete();
            }));
          break;
        }
        default:
          (r.type,
            await Promise.all(
              r.messages.map(function (e) {
                return c(r, e);
              }),
            ));
          break;
      }
      return a;
    }
    l.default = d;
  },
  98,
);

__d(
  "WAWebHandleWaChat",
  [
    "Promise",
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
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = new (r("WADeprecatedWapParser"))(
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
    function d(e, t) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
          yield o("WAWebHandleMsgProcess").processDecryptedMessageProto({
            decrypted: a,
            info: s,
            e2eInfo: u,
            bizInfo: t.bizInfo,
            hsmInfo: null,
            isPadded: !1,
          });
        })),
        m.apply(this, arguments)
      );
    }
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var r = c.parse(t);
          if (r.error)
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
                r.error.toString(),
              ),
              r.error
            );
          var a = r.success,
            i = o("WAWap").wap("ack", {
              id: o("WAWap").CUSTOM_STRING(a.stanzaId),
              class: "notification",
              type: "psa",
              to: o("WAWebCommsWapMd").JID(
                o("WAWebWidFactory").createWid(o("WAJids").PSA_JID),
              ),
            });
          switch (a.type) {
            case "revoke": {
              var l = a.revokeMessageIds;
              l.length > 0 &&
                (yield o("WAWebDBMessageDelete").removeMessagesFromHistory(l),
                l.forEach(function (e) {
                  var t = o("WAWebMsgCollection").MsgCollection.get(e);
                  t && t.delete();
                }));
              break;
            }
            default:
              (a.type,
                yield (u || (u = n("Promise"))).all(
                  a.messages.map(function (e) {
                    return d(a, e);
                  }),
                ));
              break;
          }
          return i;
        })),
        _.apply(this, arguments)
      );
    }
    l.default = p;
  },
  98,
);

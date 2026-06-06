__d(
  "WAWebGroupInviteJob",
  [
    "Promise",
    "WADeprecatedSendIq",
    "WADeprecatedWapParser",
    "WALogger",
    "WAWap",
    "WAWebBackendErrors",
    "WAWebCommsWapMd",
    "WAWebGroupJoinRequestMetricUtils",
    "WAWebJidToWid",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = new (r("WADeprecatedWapParser"))(
        "queryGroupInviteCodeParser",
        function (e) {
          return { code: e.child("invite").attrString("code") };
        },
      );
    function d(e) {
      var t = o("WAWap").wap(
        "iq",
        {
          type: "set",
          xmlns: "w:g2",
          to: o("WAWebCommsWapMd").GROUP_JID(e),
          id: o("WAWap").generateId(),
        },
        o("WAWap").wap("invite", null),
      );
      return m(t);
    }
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var r = yield o("WADeprecatedSendIq").deprecatedSendIq(t, c);
          return r.success
            ? r.result
            : (o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "sendGroupInviteIq failed: ",
                    " : ",
                    "",
                  ])),
                r.errorCode,
                r.errorType,
              ),
              (u || (u = n("Promise"))).reject(
                new (o("WAWebBackendErrors").ServerStatusCodeError)(
                  r.errorCode,
                  r.errorText,
                ),
              ));
        })),
        p.apply(this, arguments)
      );
    }
    function _(e, t) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n,
            a = (n = o("WAWap")).wap(
              "iq",
              { type: "set", xmlns: "w:g2", to: n.G_US, id: n.generateId() },
              n.wap("invite", { code: n.CUSTOM_STRING(e) }),
            ),
            i = new (r("WADeprecatedWapParser"))(
              "joinGroupViaInviteParser",
              function (e) {
                (e.assertTag("iq"),
                  e.assertAttr("from", "g.us"),
                  e.assertAttr("type", "result"));
                var n = e.maybeChild(
                  t ? "membership_approval_request" : "group",
                );
                if (!n) {
                  var r = e.child(t ? "group" : "membership_approval_request");
                  throw new (o(
                    "WAWebBackendErrors",
                  ).UnexpectedJoinGroupViaInviteResponse)(
                    o("WAWebJidToWid").groupJidToWid(r.attrGroupJid("jid")),
                    !t,
                  );
                }
                return {
                  gid: o("WAWebJidToWid").groupJidToWid(n.attrGroupJid("jid")),
                };
              },
            ),
            l = self.performance.now(),
            u = !0,
            c;
          try {
            var d = yield o("WADeprecatedSendIq").deprecatedSendIq(a, i);
            if (!d.success)
              throw (
                o("WALogger").LOG(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "joinGroupInvite failed: ",
                      ":",
                      "",
                    ])),
                  d.errorCode,
                  d.errorType,
                ),
                new (o("WAWebBackendErrors").ServerStatusCodeError)(
                  d.errorCode,
                  d.errorText,
                )
              );
            return ((c = d.result.gid), d.result);
          } catch (e) {
            throw ((u = !1), e);
          } finally {
            if (t) {
              var m = self.performance.now() - l;
              o("WAWebGroupJoinRequestMetricUtils").logMembershipRequestCreate({
                groupId: c,
                isSuccessful: u,
                responseTime: m,
              });
            }
          }
        })),
        f.apply(this, arguments)
      );
    }
    ((l.resetGroupInviteCode = d), (l.joinGroupViaInvite = _));
  },
  98,
);

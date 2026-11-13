__d(
  "WAWebGroupInviteJob",
  [
    "JSResourceForInteraction",
    "Promise",
    "WADeprecatedSendIq",
    "WADeprecatedWapParser",
    "WALogger",
    "WAWap",
    "WAWebBackendErrors",
    "WAWebCommsWapMd",
    "WAWebGroupJoinRequestMetricUtils",
    "WAWebGroupMembershipFormGating",
    "WAWebJidToWid",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = r("JSResourceForInteraction")("WAWebMexGroupJoinJob").__setRef(
        "WAWebGroupInviteJob",
      ),
      d = new (r("WADeprecatedWapParser"))(
        "queryGroupInviteCodeParser",
        function (e) {
          return { code: e.child("invite").attrString("code") };
        },
      );
    function m(e) {
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
      return p(t);
    }
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var r = yield o("WADeprecatedSendIq").deprecatedSendIq(t, d);
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
        _.apply(this, arguments)
      );
    }
    function f(e, t, n) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = self.performance.now(),
            a = !0,
            i = o("WAWebGroupMembershipFormGating").isMexGroupJoinEnabled()
              ? n
              : null,
            l = i != null ? i : void 0;
          try {
            var s = i != null ? yield h(e, t, i) : yield C(e, t);
            return ((l = s.gid), s);
          } catch (e) {
            throw ((a = !1), e);
          } finally {
            if (t) {
              var u = self.performance.now() - r;
              o("WAWebGroupJoinRequestMetricUtils").logMembershipRequestCreate({
                groupId: l,
                isSuccessful: a,
                responseTime: u,
              });
            }
          }
        })),
        g.apply(this, arguments)
      );
    }
    function h(e, t, n) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = yield c.load(),
            a = r.MexGroupJoinResult,
            i = r.mexJoinGroupViaInviteJob,
            l = yield i(e),
            s = l === a.RequestCreated;
          if (s !== t)
            throw new (o(
              "WAWebBackendErrors",
            ).UnexpectedJoinGroupViaInviteResponse)(n, s);
          return { gid: n };
        })),
        y.apply(this, arguments)
      );
    }
    function C(e, t) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
            l = yield o("WADeprecatedSendIq").deprecatedSendIq(a, i);
          if (!l.success)
            throw (
              o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "joinGroupInvite failed: ",
                    ":",
                    "",
                  ])),
                l.errorCode,
                l.errorType,
              ),
              new (o("WAWebBackendErrors").ServerStatusCodeError)(
                l.errorCode,
                l.errorText,
              )
            );
          return l.result;
        })),
        b.apply(this, arguments)
      );
    }
    ((l.resetGroupInviteCode = m), (l.joinGroupViaInvite = f));
  },
  98,
);

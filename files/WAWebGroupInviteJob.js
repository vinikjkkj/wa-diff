__d(
  "WAWebGroupInviteJob",
  [
    "JSResourceForInteraction",
    "WADeprecatedSendIq",
    "WADeprecatedWapParser",
    "WALogger",
    "WAWap",
    "WAWebBackendErrors",
    "WAWebCommsWapMd",
    "WAWebGroupJoinRequestMetricUtils",
    "WAWebGroupMembershipFormGating",
    "WAWebJidToWid",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = r("JSResourceForInteraction")("WAWebMexGroupJoinJob").__setRef(
        "WAWebGroupInviteJob",
      ),
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
    async function m(t) {
      var n = await o("WADeprecatedSendIq").deprecatedSendIq(t, c);
      return n.success
        ? n.result
        : (o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "sendGroupInviteIq failed: ",
                " : ",
                "",
              ])),
            n.errorCode,
            n.errorType,
          ),
          Promise.reject(
            new (o("WAWebBackendErrors").ServerStatusCodeError)(
              n.errorCode,
              n.errorText,
            ),
          ));
    }
    async function p(e, t, n) {
      var r = self.performance.now(),
        a = !0,
        i = o("WAWebGroupMembershipFormGating").isMexGroupJoinEnabled()
          ? n
          : null,
        l = i != null ? i : void 0;
      try {
        var s = i != null ? await _(e, t, i) : await f(e, t);
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
    }
    async function _(e, t, n) {
      var r = await u.load(),
        a = r.MexGroupJoinResult,
        i = r.mexJoinGroupViaInviteJob,
        l = await i(e),
        s = l === a.RequestCreated;
      if (s !== t)
        throw new (o(
          "WAWebBackendErrors",
        ).UnexpectedJoinGroupViaInviteResponse)(n, s);
      return { gid: n };
    }
    async function f(e, t) {
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
            var n = e.maybeChild(t ? "membership_approval_request" : "group");
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
        l = await o("WADeprecatedSendIq").deprecatedSendIq(a, i);
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
    }
    ((l.resetGroupInviteCode = d), (l.joinGroupViaInvite = p));
  },
  98,
);

__d(
  "WAWebMexGroupJoinJob",
  [
    "$InternalEnum",
    "WALogger",
    "WAWebBackendErrors",
    "WAWebMexClient",
    "WAWebMexGroupJoinJobMutation.graphql",
    "WAWebWidToJid",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = n("$InternalEnum")({
        Joined: "joined",
        RequestCreated: "request_created",
      }),
      c = 421,
      d = 500,
      m = e !== void 0 ? e : (e = n("WAWebMexGroupJoinJobMutation.graphql"));
    function p(e, t) {
      return g({
        mode: "USE_INVITE_LINK",
        use_invite_link_metadata: { invite_code: e },
        membership_form: t,
      });
    }
    function _(e, t, n) {
      return g({
        mode: "JOIN_LINKED_SUBGROUP",
        join_linked_subgroup_metadata: {
          parent_group_jid: o("WAWebWidToJid").widToGroupJid(e),
          subgroup_jid: o("WAWebWidToJid").widToGroupJid(t),
        },
        membership_form: n,
      });
    }
    function f(e, t) {
      var n = e.admin,
        r = e.code,
        o = e.expiration,
        a = e.groupJid;
      return g({
        mode: "ACCEPT_ADD_REQUEST",
        accept_add_request_metadata: {
          add_request_code: r,
          admin: n,
          expiration: o,
          group_jid: a,
        },
        membership_form: t,
      });
    }
    async function g(e) {
      var t = await o("WAWebMexClient").fetchQuery(m, { input: e }),
        n;
      e: {
        var r = t.xwa2_group_join;
        if (
          ((typeof r == "object" && r !== null) || typeof r == "function") &&
          r.__typename === "XWA2ParticipantSuccess"
        )
          return u.Joined;
        if (
          ((typeof r == "object" && r !== null) || typeof r == "function") &&
          r.__typename === "XWA2ParticipantError" &&
          "error_code" in r
        ) {
          var a = r.error_code;
          n = a;
          break e;
        }
        {
          n = null;
          break e;
        }
      }
      if (n === c) return u.RequestCreated;
      throw (
        o("WALogger")
          .WARN(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[MEX][GROUP] group join failed: ",
                "",
              ])),
            String(n),
          )
          .tags("GQL", "MEX")
          .sendLogs("mex-group-join-failed"),
        new (o("WAWebBackendErrors").ServerStatusCodeError)(n != null ? n : d)
      );
    }
    ((l.MexGroupJoinResult = u),
      (l.mexJoinGroupViaInviteJob = p),
      (l.mexJoinLinkedSubgroupJob = _),
      (l.mexAcceptGroupAddRequestJob = f));
  },
  98,
);

__d(
  "WAWebMexFetchGroupMembershipFormForJoinJob",
  [
    "WALogger",
    "WAWebBackendErrors",
    "WAWebGroupMembershipFormJoinInfoStore",
    "WAWebGroupMembershipFormProto",
    "WAWebGroupMembershipFormTypes",
    "WAWebMexClient",
    "WAWebMexFetchGroupMembershipFormForJoinJobAddRequestQuery.graphql",
    "WAWebMexFetchGroupMembershipFormForJoinJobInviteQuery.graphql",
    "WAWebMexFetchGroupMembershipFormForJoinJobLinkedQuery.graphql",
    "WAWebWidToJid",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _ = 401,
      f = 410,
      g = 500,
      h =
        e !== void 0
          ? e
          : (e = n(
              "WAWebMexFetchGroupMembershipFormForJoinJobInviteQuery.graphql",
            )),
      y =
        s !== void 0
          ? s
          : (s = n(
              "WAWebMexFetchGroupMembershipFormForJoinJobAddRequestQuery.graphql",
            )),
      C =
        u !== void 0
          ? u
          : (u = n(
              "WAWebMexFetchGroupMembershipFormForJoinJobLinkedQuery.graphql",
            ));
    async function b(e, t) {
      var n,
        r = o(
          "WAWebGroupMembershipFormJoinInfoStore",
        ).getGroupMembershipFormJoinSurface(t),
        a = v(e, t);
      o("WAWebGroupMembershipFormJoinInfoStore").setGroupMembershipFormJoinInfo(
        r,
        a,
        null,
      );
      var i = await S(t);
      if (i == null || i.id !== o("WAWebWidToJid").widToGroupJid(a))
        throw (
          o("WALogger")
            .WARN(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "[GMF] join form fetch returned another group or none",
                ])),
            )
            .tags("GQL", "MEX")
            .sendLogs("gmf-join-form-fetch-wrong-group"),
          new (o("WAWebBackendErrors").ServerStatusCodeError)(g)
        );
      var l = R(i);
      return (
        o(
          "WAWebGroupMembershipFormJoinInfoStore",
        ).setGroupMembershipFormJoinInfo(r, a, l),
        (n = l == null ? void 0 : l.record) != null ? n : null
      );
    }
    function v(e, t) {
      return t.type === "privateInvite"
        ? t.groupId
        : t.type === "subgroup"
          ? t.subgroupId
          : e;
    }
    async function S(e) {
      e: {
        var t = e;
        if (
          ((typeof t == "object" && t !== null) || typeof t == "function") &&
          t.type === "inviteCode" &&
          "inviteCode" in t
        ) {
          var n = t.inviteCode,
            r = await o("WAWebMexClient").fetchQuery(h, { invite_code: n });
          return r.xwa2_group_query_by_id;
        }
        if (
          ((typeof t == "object" && t !== null) || typeof t == "function") &&
          t.type === "privateInvite" &&
          "adminId" in t &&
          "code" in t &&
          "expiration" in t &&
          "groupId" in t
        ) {
          var a = t.adminId,
            i = t.code,
            l = t.expiration,
            s = t.groupId;
          if (a == null)
            throw new (o("WAWebBackendErrors").ServerStatusCodeError)(f);
          var u;
          try {
            u = await o("WAWebMexClient").fetchQuery(y, {
              group_jid: o("WAWebWidToJid").widToGroupJid(s),
              add_request: {
                admin: o("WAWebWidToJid").widToUserJid(a),
                code: i,
                expiration: l,
              },
            });
          } catch (e) {
            throw e instanceof o("WAWebBackendErrors").ServerStatusCodeError &&
              e.status === _
              ? new (o("WAWebBackendErrors").ServerStatusCodeError)(f)
              : e;
          }
          return u.xwa2_group_query_by_id;
        }
        if (
          ((typeof t == "object" && t !== null) || typeof t == "function") &&
          t.type === "subgroup" &&
          "subgroupId" in t
        ) {
          var c = t.subgroupId,
            d = await o("WAWebMexClient").fetchQuery(C, {
              group_jid: o("WAWebWidToJid").widToGroupJid(c),
              sub_group_jid_hint: null,
            });
          return d.xwa2_group_query_by_id;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            t,
        );
      }
    }
    function R(e) {
      var t,
        n = e.membership_form_key,
        a = e.properties,
        i = a == null || (t = a.membership_form) == null ? void 0 : t.questions;
      if (
        (a == null ? void 0 : a.membership_approval_mode_enabled) !== !0 ||
        i == null
      )
        return null;
      var l = L(i);
      if (
        l == null ||
        (l.type === "decoded" &&
          l.form.questions.length === 0 &&
          !o(
            "WAWebGroupMembershipFormTypes",
          ).requiresGroupMembershipFormMemberTag(l.form))
      )
        return null;
      var s = n == null ? void 0 : n.key_id,
        u = n == null ? void 0 : n.public_key_payload;
      if (s == null || u == null) return { record: l, key: null };
      var c;
      try {
        c = o("WAWebGroupMembershipFormProto").xwa2BinaryToBytes(u);
      } catch (e) {
        return (
          o("WALogger")
            .WARN(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "[MEX][GROUP] membership form key doesn't decode",
                ])),
            )
            .tags("GQL", "MEX")
            .catching(r("getErrorSafe")(e))
            .sendLogs("gmf-join-form-key-undecodable"),
          { record: { type: "undecodable" }, key: null }
        );
      }
      return { record: l, key: { keyId: s, publicKey: c } };
    }
    function L(e) {
      var t, n;
      try {
        n = o("WAWebGroupMembershipFormProto").decodeGroupMembershipFormRecord(
          o("WAWebGroupMembershipFormProto").xwa2BinaryToBytes(e),
        );
      } catch (e) {
        return (
          o("WALogger")
            .WARN(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "[MEX][GROUP] membership form questions don't decode",
                ])),
            )
            .tags("GQL", "MEX")
            .catching(r("getErrorSafe")(e))
            .sendLogs("gmf-join-form-questions-undecodable"),
          { type: "undecodable" }
        );
      }
      return (
        ((t = n) == null ? void 0 : t.type) === "undecodable" &&
          o("WALogger")
            .WARN(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "[MEX][GROUP] membership form questions don't decode",
                ])),
            )
            .tags("GQL", "MEX")
            .sendLogs("gmf-join-form-questions-undecodable"),
        n
      );
    }
    l.fetchGroupMembershipFormForJoinJob = b;
  },
  98,
);

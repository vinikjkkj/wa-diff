__d(
  "WAWebGroupMembershipFormJoinJob",
  [
    "WALogger",
    "WAWebBackendErrors",
    "WAWebGroupMembershipFormCrypto",
    "WAWebGroupMembershipFormJoinInfoStore",
    "WAWebGroupMembershipFormLimits",
    "WAWebGroupMembershipFormProto",
    "WAWebGroupMembershipFormRequestStore",
    "WAWebGroupMembershipFormTypes",
    "WAWebMexFetchGroupMembershipFormForJoinJob",
    "WAWebMexGroupJoinJob",
    "WAWebWidToJid",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = 400,
      m = 413,
      p = 437;
    async function _(t) {
      var n = t.answers,
        r = t.groupId,
        a = t.requestId,
        i = t.source;
      try {
        try {
          return await f({ answers: n, groupId: r, requestId: a, source: i });
        } catch (t) {
          if (
            !(
              t instanceof
              o("WAWebGroupMembershipFormTypes").GroupMembershipFormJoinError
            ) ||
            t.code !==
              o("WAWebGroupMembershipFormTypes")
                .GroupMembershipFormJoinErrorCode.STALE_KEY
          )
            throw t;
          return (
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[GMF] join: stale form key, refetching the form",
                ])),
            ),
            await o(
              "WAWebMexFetchGroupMembershipFormForJoinJob",
            ).fetchGroupMembershipFormForJoinJob(r, i),
            await f({ answers: n, groupId: r, requestId: a, source: i })
          );
        }
      } catch (e) {
        if (
          e instanceof
          o("WAWebGroupMembershipFormTypes").GroupMembershipFormJoinError
        )
          return (
            o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[GMF] join failed: ",
                  ", ",
                  "",
                ])),
              e.code,
              String(e.serverStatusCode),
            ),
            {
              type: "error",
              code: e.code,
              serverStatusCode: e.serverStatusCode,
            }
          );
        if (e instanceof o("WAWebBackendErrors").ServerStatusCodeError)
          return (
            o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[GMF] join failed: ",
                  "",
                ])),
              e.status,
            ),
            {
              type: "error",
              code: o("WAWebGroupMembershipFormTypes")
                .GroupMembershipFormJoinErrorCode.SERVER,
              serverStatusCode: e.status,
            }
          );
        throw e;
      }
    }
    async function f(e) {
      var t,
        n = e.answers,
        a = e.groupId,
        i = e.requestId,
        l = e.source,
        s =
          (t = o(
            "WAWebGroupMembershipFormJoinInfoStore",
          ).getGroupMembershipFormJoinInfo(
            o(
              "WAWebGroupMembershipFormJoinInfoStore",
            ).getGroupMembershipFormJoinSurface(l),
            a,
          )) == null
            ? void 0
            : t.key;
      if (s == null)
        throw new (o(
          "WAWebGroupMembershipFormTypes",
        ).GroupMembershipFormJoinError)(
          o("WAWebGroupMembershipFormTypes").GroupMembershipFormJoinErrorCode
            .STALE_KEY,
        );
      var u = await g({ answers: n, groupId: a, key: s, requestId: i }),
        d;
      try {
        d = await h(l, u);
      } catch (e) {
        throw y(e);
      }
      return d === o("WAWebMexGroupJoinJob").MexGroupJoinResult.Joined
        ? { type: "joined" }
        : (await o("WAWebGroupMembershipFormRequestStore")
            .putGroupMembershipFormStoredRequest({
              groupId: a,
              inviteCode: l.type === "inviteCode" ? l.inviteCode : null,
              answers: n,
              requestId: i,
              keyId: s.keyId,
            })
            .catch(function (e) {
              o("WALogger")
                .WARN(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "[GMF] storing the sent request failed",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("gmf-store-sent-request-failed");
            }),
          { type: "requestCreated" });
    }
    async function g(e) {
      var t = e.answers,
        n = e.groupId,
        r = e.key,
        a = e.requestId,
        i = await o("WAWebGroupMembershipFormCrypto")
          .getGroupMembershipFormAnswersEncoder()
          .encode(t, { groupId: n, key: r }),
        l = i.encryptedPayload,
        s = i.reportingToken;
      if (
        l.byteLength >
        o("WAWebGroupMembershipFormLimits")
          .GROUP_MEMBERSHIP_FORM_MAX_PAYLOAD_BYTES
      )
        throw new (o(
          "WAWebGroupMembershipFormTypes",
        ).GroupMembershipFormJoinError)(
          o("WAWebGroupMembershipFormTypes").GroupMembershipFormJoinErrorCode
            .ANSWERS_TOO_LARGE,
        );
      return babelHelpers.extends(
        {
          request_id: a,
          key_id: r.keyId,
          encrypted_payload: o(
            "WAWebGroupMembershipFormProto",
          ).bytesToXWA2Binary(l),
        },
        s != null && {
          reporting_token: o("WAWebGroupMembershipFormProto").bytesToXWA2Binary(
            s.token,
          ),
          reporting_token_version: s.version,
        },
      );
    }
    function h(e, t) {
      return (function (e) {
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.type === "inviteCode" &&
          "inviteCode" in e
        ) {
          var n = e.inviteCode;
          return o("WAWebMexGroupJoinJob").mexJoinGroupViaInviteJob(n, t);
        }
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.type === "subgroup" &&
          "parentGroupId" in e &&
          "subgroupId" in e
        ) {
          var r = e.parentGroupId,
            a = e.subgroupId;
          return o("WAWebMexGroupJoinJob").mexJoinLinkedSubgroupJob(r, a, t);
        }
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.type === "privateInvite" &&
          "adminId" in e &&
          "code" in e &&
          "expiration" in e &&
          "groupId" in e
        ) {
          var i = e.adminId,
            l = e.code,
            s = e.expiration,
            u = e.groupId;
          return i == null
            ? Promise.reject(
                new (o(
                  "WAWebGroupMembershipFormTypes",
                ).GroupMembershipFormJoinError)(
                  o("WAWebGroupMembershipFormTypes")
                    .GroupMembershipFormJoinErrorCode.SERVER,
                ),
              )
            : o("WAWebMexGroupJoinJob").mexAcceptGroupAddRequestJob(
                {
                  admin: o("WAWebWidToJid").widToUserJid(i),
                  code: l,
                  expiration: s,
                  groupJid: o("WAWebWidToJid").widToGroupJid(u),
                },
                t,
              );
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      })(e);
    }
    function y(e) {
      if (!(e instanceof o("WAWebBackendErrors").ServerStatusCodeError))
        return e;
      var t =
        e.status === p
          ? o("WAWebGroupMembershipFormTypes").GroupMembershipFormJoinErrorCode
              .STALE_KEY
          : e.status === m
            ? o("WAWebGroupMembershipFormTypes")
                .GroupMembershipFormJoinErrorCode.ANSWERS_TOO_LARGE
            : e.status === d
              ? o("WAWebGroupMembershipFormTypes")
                  .GroupMembershipFormJoinErrorCode.INVALID_ANSWERS
              : o("WAWebGroupMembershipFormTypes")
                  .GroupMembershipFormJoinErrorCode.SERVER;
      return new (o(
        "WAWebGroupMembershipFormTypes",
      ).GroupMembershipFormJoinError)(t, e.status);
    }
    l.submitGroupMembershipFormJoinJob = _;
  },
  98,
);

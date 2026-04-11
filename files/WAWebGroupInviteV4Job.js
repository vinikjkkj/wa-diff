__d(
  "WAWebGroupInviteV4Job",
  [
    "WALogger",
    "WASmaxGroupsAcceptGroupAddRPC",
    "WASmaxGroupsGetGroupInfoRPC",
    "WASmaxGroupsRevokeRequestCodeRPC",
    "WAWebGroupsQueryApi",
    "WAWebJidToWid",
    "WAWebSetUsernameJob",
    "WAWebUsernameGatingUtils",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m;
    function p(e, t, n, r, o) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (t, n, r, a, i) {
            var l = yield o("WASmaxGroupsGetGroupInfoRPC").sendGetGroupInfoRPC({
              addRequestArgs: {
                addRequestExpiration: parseInt(n, 10),
                addRequestAdmin: o("WAWebWidToJid").widToUserJid(a),
                addRequestCode: t,
              },
              iqTo: r,
              queryPhash: i,
            });
            e: {
              var u = l;
              if (
                ((typeof u == "object" && u !== null) ||
                  typeof u == "function") &&
                u.name === "GetGroupInfoResponseSuccess" &&
                ((typeof u.value == "object" && u.value !== null) ||
                  typeof u.value == "function") &&
                "group" in u.value
              ) {
                var c = u.value.group;
                if (c == null) return { status: 200, phashMatch: !0 };
                var d = o("WAWebGroupsQueryApi").parseGroupSmax(c);
                return { status: 200, groupMetadata: d };
              }
              if (
                ((typeof u == "object" && u !== null) ||
                  typeof u == "function") &&
                u.name === "GetGroupInfoResponseClientError" &&
                ((typeof u.value == "object" && u.value !== null) ||
                  typeof u.value == "function") &&
                ((typeof u.value.errorGetGroupInfoClientErrors == "object" &&
                  u.value.errorGetGroupInfoClientErrors !== null) ||
                  typeof u.value.errorGetGroupInfoClientErrors == "function") &&
                ((typeof u.value.errorGetGroupInfoClientErrors.value ==
                  "object" &&
                  u.value.errorGetGroupInfoClientErrors.value !== null) ||
                  typeof u.value.errorGetGroupInfoClientErrors.value ==
                    "function") &&
                "code" in u.value.errorGetGroupInfoClientErrors.value &&
                "text" in u.value.errorGetGroupInfoClientErrors.value
              ) {
                var m = u.value.errorGetGroupInfoClientErrors.value.code,
                  p = u.value.errorGetGroupInfoClientErrors.value.text;
                return (
                  o("WALogger").LOG(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "queryGroupInviteV4: failed ",
                        ":",
                        "",
                      ])),
                    Number(m),
                    p,
                  ),
                  { status: Number(m) }
                );
                break e;
              }
              if (
                ((typeof u == "object" && u !== null) ||
                  typeof u == "function") &&
                u.name === "GetGroupInfoResponseServerError" &&
                ((typeof u.value == "object" && u.value !== null) ||
                  typeof u.value == "function") &&
                ((typeof u.value.errorServerErrors == "object" &&
                  u.value.errorServerErrors !== null) ||
                  typeof u.value.errorServerErrors == "function") &&
                ((typeof u.value.errorServerErrors.value == "object" &&
                  u.value.errorServerErrors.value !== null) ||
                  typeof u.value.errorServerErrors.value == "function") &&
                "code" in u.value.errorServerErrors.value &&
                "text" in u.value.errorServerErrors.value
              ) {
                var _ = u.value.errorServerErrors.value.code,
                  f = u.value.errorServerErrors.value.text;
                return (
                  o("WALogger").LOG(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "queryGroupInviteV4: failed ",
                        ":",
                        "",
                      ])),
                    _,
                    f,
                  ),
                  { status: Number(_) }
                );
                break e;
              }
              throw Error(
                "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                  u,
              );
            }
          },
        )),
        _.apply(this, arguments)
      );
    }
    function f(e, t, n, r) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            var a = yield o(
              "WASmaxGroupsAcceptGroupAddRPC",
            ).sendAcceptGroupAddRPC({
              iqTo: n,
              acceptCode: e,
              acceptExpiration: parseInt(t, 10),
              acceptAdmin: o("WAWebWidToJid").widToUserJid(r),
            });
            switch (a.name) {
              case "AcceptGroupAddResponseSuccess":
                return {
                  status: 200,
                  gid: o("WAWebJidToWid").groupJidToWid(n),
                };
              case "AcceptGroupAddResponseGroupJoinRequestSuccess":
                return {
                  status: 200,
                  gid: o("WAWebJidToWid").groupJidToWid(n),
                };
              case "AcceptGroupAddResponseClientError": {
                var i = a.value.errorAcceptGroupAddClientErrors.value,
                  l = i.code,
                  s = i.text;
                return (
                  o("WALogger").LOG(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "joinGroupViaInviteV4: failed ",
                        ":",
                        "",
                      ])),
                    l,
                    s,
                  ),
                  { status: Number(l) }
                );
              }
              case "AcceptGroupAddResponseServerError": {
                var d = a.value.errorServerErrors.value,
                  m = d.code,
                  p = d.text;
                return (
                  o("WALogger").LOG(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "joinGroupViaInviteV4: failed ",
                        ":",
                        "",
                      ])),
                    m,
                    p,
                  ),
                  { status: Number(m) }
                );
              }
            }
          },
        )),
        g.apply(this, arguments)
      );
    }
    function h(e, t) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield o(
            "WASmaxGroupsRevokeRequestCodeRPC",
          ).sendRevokeRequestCodeRPC({
            participantArgs: e.map(function (e) {
              return { participantJid: o("WAWebWidToJid").widToUserJid(e) };
            }),
            iqTo: t,
          });
          switch (n.name) {
            case "RevokeRequestCodeResponseSuccess": {
              var r = n.value.revokeParticipant;
              if (o("WAWebUsernameGatingUtils").usernameDisplayedEnabled()) {
                var a = r.reduce(function (e, t) {
                  var n,
                    r = t.jid,
                    a = (n = t.usernameAttMixin) == null ? void 0 : n.username;
                  return (
                    a != null &&
                      e.push({
                        userId: o("WAWebJidToWid").userJidToUserWid(r),
                        username: a,
                      }),
                    e
                  );
                }, []);
                a.length > 0 &&
                  (yield o("WAWebSetUsernameJob").setUsernamesJob(a));
              }
              return { status: 200 };
            }
            case "RevokeRequestCodeResponseClientError": {
              var i = n.value.errorClientErrors.value,
                l = i.code,
                s = i.text;
              return (
                o("WALogger").LOG(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "revokeGroupInviteV4: failed ",
                      ":",
                      "",
                    ])),
                  l,
                  s,
                ),
                { status: Number(l) }
              );
            }
            case "RevokeRequestCodeResponseServerError": {
              var u = n.value.errorServerErrors.value,
                c = u.code,
                p = u.text;
              return (
                o("WALogger").LOG(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "revokeGroupInviteV4: failed ",
                      ":",
                      "",
                    ])),
                  c,
                  p,
                ),
                { status: Number(c) }
              );
            }
          }
        })),
        y.apply(this, arguments)
      );
    }
    ((l.queryGroupInviteV4 = p),
      (l.joinGroupViaInviteV4 = f),
      (l.revokeGroupInviteV4 = h));
  },
  98,
);

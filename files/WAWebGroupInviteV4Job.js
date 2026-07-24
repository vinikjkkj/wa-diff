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
    "WAWebUsernameTypes",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m;
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = t.from,
            r = t.inviteCode,
            a = t.inviteCodeExp,
            i = t.inviteGrp,
            l = t.phash,
            u = yield o("WASmaxGroupsGetGroupInfoRPC").sendGetGroupInfoRPC({
              addRequestArgs: {
                addRequestExpiration: parseInt(a, 10),
                addRequestAdmin: o("WAWebWidToJid").widToUserJid(n),
                addRequestCode: r,
              },
              iqTo: i,
              queryPhash: l,
            });
          e: {
            var c = u;
            if (
              ((typeof c == "object" && c !== null) ||
                typeof c == "function") &&
              c.name === "GetGroupInfoResponseSuccess" &&
              ((typeof c.value == "object" && c.value !== null) ||
                typeof c.value == "function") &&
              "group" in c.value
            ) {
              var d = c.value.group;
              if (d == null) return { status: 200, phashMatch: !0 };
              var m = o("WAWebGroupsQueryApi").parseGroupSmax(d);
              return { status: 200, groupMetadata: m };
            }
            if (
              ((typeof c == "object" && c !== null) ||
                typeof c == "function") &&
              c.name === "GetGroupInfoResponseClientError" &&
              ((typeof c.value == "object" && c.value !== null) ||
                typeof c.value == "function") &&
              ((typeof c.value.errorGetGroupInfoClientErrors == "object" &&
                c.value.errorGetGroupInfoClientErrors !== null) ||
                typeof c.value.errorGetGroupInfoClientErrors == "function") &&
              ((typeof c.value.errorGetGroupInfoClientErrors.value ==
                "object" &&
                c.value.errorGetGroupInfoClientErrors.value !== null) ||
                typeof c.value.errorGetGroupInfoClientErrors.value ==
                  "function") &&
              "code" in c.value.errorGetGroupInfoClientErrors.value &&
              "text" in c.value.errorGetGroupInfoClientErrors.value
            ) {
              var p = c.value.errorGetGroupInfoClientErrors.value.code,
                _ = c.value.errorGetGroupInfoClientErrors.value.text;
              return (
                o("WALogger").LOG(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "queryGroupInviteV4: failed ",
                      ":",
                      "",
                    ])),
                  Number(p),
                  _,
                ),
                { status: Number(p) }
              );
              break e;
            }
            if (
              ((typeof c == "object" && c !== null) ||
                typeof c == "function") &&
              c.name === "GetGroupInfoResponseServerError" &&
              ((typeof c.value == "object" && c.value !== null) ||
                typeof c.value == "function") &&
              ((typeof c.value.errorServerErrors == "object" &&
                c.value.errorServerErrors !== null) ||
                typeof c.value.errorServerErrors == "function") &&
              ((typeof c.value.errorServerErrors.value == "object" &&
                c.value.errorServerErrors.value !== null) ||
                typeof c.value.errorServerErrors.value == "function") &&
              "code" in c.value.errorServerErrors.value &&
              "text" in c.value.errorServerErrors.value
            ) {
              var f = c.value.errorServerErrors.value.code,
                g = c.value.errorServerErrors.value.text;
              return (
                o("WALogger").LOG(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "queryGroupInviteV4: failed ",
                      ":",
                      "",
                    ])),
                  f,
                  g,
                ),
                { status: Number(f) }
              );
              break e;
            }
            throw Error(
              "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                c,
            );
          }
        })),
        _.apply(this, arguments)
      );
    }
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.from,
            n = e.inviteCode,
            r = e.inviteCodeExp,
            a = e.inviteGrp,
            i = yield o("WASmaxGroupsAcceptGroupAddRPC").sendAcceptGroupAddRPC({
              iqTo: a,
              acceptCode: n,
              acceptExpiration: parseInt(r, 10),
              acceptAdmin: o("WAWebWidToJid").widToUserJid(t),
            });
          switch (i.name) {
            case "AcceptGroupAddResponseSuccess":
              return { status: 200, gid: o("WAWebJidToWid").groupJidToWid(a) };
            case "AcceptGroupAddResponseGroupJoinRequestSuccess":
              return { status: 200, gid: o("WAWebJidToWid").groupJidToWid(a) };
            case "AcceptGroupAddResponseClientError": {
              var l = i.value.errorAcceptGroupAddClientErrors.value,
                s = l.code,
                d = l.text;
              return (
                o("WALogger").LOG(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "joinGroupViaInviteV4: failed ",
                      ":",
                      "",
                    ])),
                  s,
                  d,
                ),
                { status: Number(s) }
              );
            }
            case "AcceptGroupAddResponseServerError": {
              var m = i.value.errorServerErrors.value,
                p = m.code,
                _ = m.text;
              return (
                o("WALogger").LOG(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "joinGroupViaInviteV4: failed ",
                      ":",
                      "",
                    ])),
                  p,
                  _,
                ),
                { status: Number(p) }
              );
            }
          }
        })),
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
                        username: o("WAWebUsernameTypes").asUsername(a),
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

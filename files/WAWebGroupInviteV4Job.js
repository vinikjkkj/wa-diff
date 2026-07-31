__d(
  "WAWebGroupInviteV4Job",
  [
    "WALogger",
    "WASmaxGroupsRevokeRequestCodeRPC",
    "WAWebJidToWid",
    "WAWebSetUsernameJob",
    "WAWebUsernameGatingUtils",
    "WAWebUsernameTypes",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e, t) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          var r = yield o(
            "WASmaxGroupsRevokeRequestCodeRPC",
          ).sendRevokeRequestCodeRPC({
            participantArgs: t.map(function (e) {
              return { participantJid: o("WAWebWidToJid").widToUserJid(e) };
            }),
            iqTo: n,
          });
          switch (r.name) {
            case "RevokeRequestCodeResponseSuccess": {
              var a = r.value.revokeParticipant;
              if (o("WAWebUsernameGatingUtils").usernameDisplayedEnabled()) {
                var i = a.reduce(function (e, t) {
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
                i.length > 0 &&
                  (yield o("WAWebSetUsernameJob").setUsernamesJob(i));
              }
              return { status: 200 };
            }
            case "RevokeRequestCodeResponseClientError": {
              var l = r.value.errorClientErrors.value,
                u = l.code,
                c = l.text;
              return (
                o("WALogger").LOG(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "revokeGroupInviteV4: failed ",
                      ":",
                      "",
                    ])),
                  u,
                  c,
                ),
                { status: Number(u) }
              );
            }
            case "RevokeRequestCodeResponseServerError": {
              var d = r.value.errorServerErrors.value,
                m = d.code,
                p = d.text;
              return (
                o("WALogger").LOG(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "revokeGroupInviteV4: failed ",
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
        })),
        c.apply(this, arguments)
      );
    }
    l.revokeGroupInviteV4 = u;
  },
  98,
);

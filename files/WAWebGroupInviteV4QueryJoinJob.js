__d(
  "WAWebGroupInviteV4QueryJoinJob",
  [
    "WALogger",
    "WASmaxGroupsAcceptGroupAddRPC",
    "WASmaxGroupsGetGroupInfoRPC",
    "WAWebGroupsQueryApi",
    "WAWebJidToWid",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c;
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
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
        m.apply(this, arguments)
      );
    }
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        _.apply(this, arguments)
      );
    }
    ((l.queryGroupInviteV4 = d), (l.joinGroupViaInviteV4 = p));
  },
  98,
);

__d(
  "WAWebGroupInviteV4QueryJoinJob",
  [
    "JSResourceForInteraction",
    "WALogger",
    "WASmaxGroupsAcceptGroupAddRPC",
    "WASmaxGroupsGetGroupInfoRPC",
    "WAWebBackendErrors",
    "WAWebGroupMembershipFormGating",
    "WAWebGroupsQueryApi",
    "WAWebJidToWid",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f = 410,
      g = r("JSResourceForInteraction")(
        "WAWebMexFetchGroupInviteInfoJob",
      ).__setRef("WAWebGroupInviteV4QueryJoinJob"),
      h = r("JSResourceForInteraction")("WAWebMexGroupJoinJob").__setRef(
        "WAWebGroupInviteV4QueryJoinJob",
      );
    function y(e) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = t.from,
            r = t.inviteCode,
            a = t.inviteCodeExp,
            i = t.inviteGrp,
            l = t.phash;
          if (
            o(
              "WAWebGroupMembershipFormGating",
            ).isMexGroupAddRequestInfoEnabled()
          )
            return b({
              from: n,
              inviteCode: r,
              inviteCodeExp: a,
              inviteGrp: i,
            });
          var u = yield o("WASmaxGroupsGetGroupInfoRPC").sendGetGroupInfoRPC({
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
        C.apply(this, arguments)
      );
    }
    function b(e) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.from,
            n = e.inviteCode,
            r = e.inviteCodeExp,
            a = e.inviteGrp,
            i = parseInt(r, 10);
          if (Number.isNaN(i))
            return (
              o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "queryGroupInviteV4: invalid expiration",
                  ])),
              ),
              { status: f }
            );
          var l = yield g.load(),
            s = l.mexFetchGroupAddRequestInfoJob;
          try {
            var d = yield s({
              admin: o("WAWebWidToJid").widToUserJid(t),
              code: n,
              expiration: i,
              groupJid: a,
            });
            return { status: 200, groupMetadata: d };
          } catch (e) {
            if (e instanceof o("WAWebBackendErrors").ServerStatusCodeError)
              return (
                o("WALogger").LOG(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "queryGroupInviteV4: failed over MEX ",
                      "",
                    ])),
                  e.status,
                ),
                { status: e.status }
              );
            throw e;
          }
        })),
        v.apply(this, arguments)
      );
    }
    function S(e) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.from,
            n = e.inviteCode,
            r = e.inviteCodeExp,
            a = e.inviteGrp;
          if (o("WAWebGroupMembershipFormGating").isMexGroupJoinEnabled())
            return L({
              from: t,
              inviteCode: n,
              inviteCodeExp: r,
              inviteGrp: a,
            });
          var i = yield o(
            "WASmaxGroupsAcceptGroupAddRPC",
          ).sendAcceptGroupAddRPC({
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
                u = l.text;
              return (
                o("WALogger").LOG(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "joinGroupViaInviteV4: failed ",
                      ":",
                      "",
                    ])),
                  s,
                  u,
                ),
                { status: Number(s) }
              );
            }
            case "AcceptGroupAddResponseServerError": {
              var c = i.value.errorServerErrors.value,
                p = c.code,
                _ = c.text;
              return (
                o("WALogger").LOG(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
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
        R.apply(this, arguments)
      );
    }
    function L(e) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.from,
            n = e.inviteCode,
            r = e.inviteCodeExp,
            a = e.inviteGrp,
            i = parseInt(r, 10);
          if (Number.isNaN(i))
            return (
              o("WALogger").LOG(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "joinGroupViaInviteV4: invalid expiration",
                  ])),
              ),
              { status: f }
            );
          var l = yield h.load(),
            s = l.mexAcceptGroupAddRequestJob;
          try {
            yield s({
              admin: o("WAWebWidToJid").widToUserJid(t),
              code: n,
              expiration: i,
              groupJid: a,
            });
          } catch (e) {
            if (e instanceof o("WAWebBackendErrors").ServerStatusCodeError)
              return (
                o("WALogger").LOG(
                  _ ||
                    (_ = babelHelpers.taggedTemplateLiteralLoose([
                      "joinGroupViaInviteV4: failed over MEX ",
                      "",
                    ])),
                  e.status,
                ),
                { status: e.status }
              );
            throw e;
          }
          return { status: 200, gid: o("WAWebJidToWid").groupJidToWid(a) };
        })),
        E.apply(this, arguments)
      );
    }
    ((l.queryGroupInviteV4 = y), (l.joinGroupViaInviteV4 = S));
  },
  98,
);

__d(
  "WAWebOrgPrivacyListJob",
  [
    "WALogger",
    "WAPromiseQueue",
    "WASmaxPrivacyGetOrgsListRPC",
    "WASmaxPrivacySetOrgsListRPC",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = "none",
      c = new (o("WAPromiseQueue").PromiseQueueMap)(),
      d = new Map();
    function m(e) {
      var t = _(e);
      return c.enqueue(t, function () {
        return f(t);
      });
    }
    function p(e) {
      var t = e.category,
        n = e.excluded,
        r = e.orgId,
        o = _(t);
      return c.enqueue(o, function () {
        return g({ excluded: n, orgId: r, serverCategory: o });
      });
    }
    function _(e) {
      return e === "about"
        ? "status"
        : e === "groupAdd"
          ? "groupadd"
          : e === "lastSeen"
            ? "last"
            : e === "profilePicture"
              ? "profile"
              : (function () {
                  throw Error(
                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                      e,
                  );
                })();
    }
    async function f(e) {
      try {
        var t = await o("WASmaxPrivacyGetOrgsListRPC").sendGetOrgsListRPC({
          categoryNamesForOrgsListMixinArgs: { anyName: e },
          orgsListDhash: u,
        });
        return t.name === "GetOrgsListResponseError"
          ? (h({
              reason: t.value.errorGetPrivacyListError.name,
              sendLogsTag: "org-privacy-list-get-failed",
              serverCategory: e,
            }),
            null)
          : (d.set(e, t.value.privacyOrgsListDhash),
            t.value.privacyOrgsListOrg.map(function (e) {
              var t = e.orgId;
              return t;
            }));
      } catch (t) {
        return (
          h({
            reason: r("getErrorSafe")(t).name,
            sendLogsTag: "org-privacy-list-get-failed",
            serverCategory: e,
          }),
          null
        );
      }
    }
    async function g(e) {
      var t = e.excluded,
        n = e.orgId,
        a = e.serverCategory;
      try {
        var i,
          l = await o("WASmaxPrivacySetOrgsListRPC").sendSetOrgsListRPC({
            categoryNamesForOrgsListMixinArgs: { anyName: a },
            orgArgs: [{ orgAction: t ? "add" : "remove", orgOrgId: n }],
            orgsListDhash: (i = d.get(a)) != null ? i : u,
          });
        return l.name === "SetOrgsListResponseError"
          ? (h({
              reason: l.value.errorSetOrgsListError.name,
              sendLogsTag: "org-privacy-list-set-failed",
              serverCategory: a,
            }),
            !1)
          : (d.set(a, l.value.privacyOrgsListDhash), !0);
      } catch (e) {
        return (
          h({
            reason: r("getErrorSafe")(e).name,
            sendLogsTag: "org-privacy-list-set-failed",
            serverCategory: a,
          }),
          !1
        );
      }
    }
    function h(t) {
      var n = t.reason,
        r = t.sendLogsTag,
        a = t.serverCategory;
      if (n === "IQErrorFeatureNotImplemented") {
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[org-privacy-list] ",
              ": not served yet",
            ])),
          a,
        );
        return;
      }
      o("WALogger")
        .WARN(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "[org-privacy-list] ",
              " failed: ",
              "",
            ])),
          a,
          n,
        )
        .sendLogs(r);
    }
    ((l.getExcludedOrgIds = m), (l.setOrgExcluded = p));
  },
  98,
);

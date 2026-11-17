__d(
  "WAWebGroupMembershipFormMemberTagAction",
  [
    "WALogger",
    "WAWebGroupMembershipFormGating",
    "WAWebGroupMembershipFormStoredRequests",
    "WAWebSendMemberLabelAction",
    "WAWebSendMsgResultAction",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          if (
            o(
              "WAWebGroupMembershipFormGating",
            ).isGroupMembershipFormJoinEnabled()
          ) {
            var n = o("WAWebWidFactory").asGroupWidOrThrow(t.id);
            try {
              var a = yield o(
                "WAWebGroupMembershipFormStoredRequests",
              ).fetchStoredGroupMembershipFormRequest({
                type: "group",
                groupId: n,
              });
              if (a == null) return;
              var i = a.answers.memberTag;
              try {
                if (i != null && i !== "") {
                  var l = yield o(
                      "WAWebSendMemberLabelAction",
                    ).sendMemberLabelMsg(t, i),
                    u = l.messageSendResult;
                  u !== o("WAWebSendMsgResultAction").SendMsgResult.OK &&
                    o("WALogger")
                      .WARN(
                        e ||
                          (e = babelHelpers.taggedTemplateLiteralLoose([
                            "[GMF] setting the member tag after joining failed: ",
                            "",
                          ])),
                        u,
                      )
                      .sendLogs("gmf-apply-member-tag-send-failed");
                }
              } finally {
                yield o(
                  "WAWebGroupMembershipFormStoredRequests",
                ).clearStoredGroupMembershipFormRequest(n);
              }
            } catch (e) {
              o("WALogger")
                .WARN(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[GMF] applying the member tag after joining failed",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("gmf-apply-member-tag-failed");
            }
          }
        })),
        c.apply(this, arguments)
      );
    }
    l.applyStoredGroupMembershipFormMemberTag = u;
  },
  98,
);

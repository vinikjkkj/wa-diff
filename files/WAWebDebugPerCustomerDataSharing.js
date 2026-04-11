__d(
  "WAWebDebugPerCustomerDataSharing",
  [
    "WALogger",
    "WAWebContactSystemMsg",
    "WAWebCtwaPerCustomerDataSharingSync",
    "WAWebDataSharing3pdLidCollection",
    "WAWebHandleSingleMsgFactory",
    "WAWebMsgType",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _, f, g, h, y;
    function C(e) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          yield r("WAWebCtwaPerCustomerDataSharingSync").applyMutations(e);
        })),
        b.apply(this, arguments)
      );
    }
    C.doc =
      "Apply per-customer data sharing mutations to the DB. This is used for testing syncd mutations only.";
    function v(e, t) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = o("WAWebWidFactory").createUserLidOrThrow(e);
          return r(
            "WAWebCtwaPerCustomerDataSharingSync",
          ).sendPerCustomerDataSharingUpdate(n, t);
        })),
        S.apply(this, arguments)
      );
    }
    v.doc =
      "Send per-customer data sharing mutation to primary device through syncd. This will sync the setting to your Android/iOS device.";
    function R() {
      if (
        (o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[debug] DataSharing3pdLidCollection - Total records: ",
              "",
            ])),
          o("WAWebDataSharing3pdLidCollection").DataSharing3pdLidCollection
            .length,
        ),
        o("WAWebDataSharing3pdLidCollection").DataSharing3pdLidCollection
          .length === 0)
      ) {
        o("WALogger").LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "[debug] DataSharing3pdLidCollection is empty.",
            ])),
        );
        return;
      }
      (o("WALogger").LOG(
        u ||
          (u = babelHelpers.taggedTemplateLiteralLoose([
            "[debug] All per-customer data sharing records:",
          ])),
      ),
        o(
          "WAWebDataSharing3pdLidCollection",
        ).DataSharing3pdLidCollection.forEach(function (e) {
          o("WALogger").LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "[debug] - LID: ",
                ", Enabled: ",
                "",
              ])),
            e.id,
            e.dataSharing3pdEnabled,
          );
        }));
    }
    R.doc =
      "Inspect the current state of DataSharing3pdLidCollection. Shows total count and details of all records.";
    function L(e) {
      var t = o(
          "WAWebDataSharing3pdLidCollection",
        ).DataSharing3pdLidCollection.isDataSharingEnabled(e),
        n = o(
          "WAWebDataSharing3pdLidCollection",
        ).DataSharing3pdLidCollection.get(e);
      (o("WALogger").LOG(
        d ||
          (d = babelHelpers.taggedTemplateLiteralLoose([
            "[debug] Data sharing status for ",
            ":",
          ])),
        e,
      ),
        o("WALogger").LOG(
          m ||
            (m = babelHelpers.taggedTemplateLiteralLoose([
              "[debug] - Enabled: ",
              "",
            ])),
          t,
        ),
        o("WALogger").LOG(
          p ||
            (p = babelHelpers.taggedTemplateLiteralLoose([
              "[debug] - Record exists: ",
              "",
            ])),
          n != null,
        ),
        n != null &&
          o("WALogger").LOG(
            _ ||
              (_ = babelHelpers.taggedTemplateLiteralLoose([
                "[debug] - Model details: ",
                "",
              ])),
            JSON.stringify(n.toJSON()),
          ));
    }
    L.doc =
      "Check data sharing status for a specific customer LID. Returns whether sharing is enabled and shows model details if it exists.";
    function E() {
      var e = o("WAWebDataSharing3pdLidCollection").DataSharing3pdLidCollection
        .length;
      o("WALogger").LOG(
        f ||
          (f = babelHelpers.taggedTemplateLiteralLoose([
            "[debug] Clearing DataSharing3pdLidCollection. Initial size: ",
            "",
          ])),
        e,
      );
      var t = o(
        "WAWebDataSharing3pdLidCollection",
      ).DataSharing3pdLidCollection.toArray();
      (t.forEach(function (e) {
        o(
          "WAWebDataSharing3pdLidCollection",
        ).DataSharing3pdLidCollection.remove(e);
      }),
        o("WALogger").LOG(
          g ||
            (g = babelHelpers.taggedTemplateLiteralLoose([
              "[debug] Cleared ",
              " records from DataSharing3pdLidCollection.",
            ])),
          e,
        ),
        o("WALogger").LOG(
          h ||
            (h = babelHelpers.taggedTemplateLiteralLoose([
              "[debug] New size: ",
              "",
            ])),
          o("WAWebDataSharing3pdLidCollection").DataSharing3pdLidCollection
            .length,
        ));
    }
    E.doc =
      "Clear all records from DataSharing3pdLidCollection. Useful for testing initialization and syncing.";
    var k = (function () {
      var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
        try {
          var n = o("WAWebContactSystemMsg").genNotificationMsg(e, {
            type: "notification_template",
            kind: o("WAWebMsgType").MsgKind.NotificationTemplate,
            subtype: t
              ? "biz_per_customer_3pd_data_share_opt_in"
              : "biz_per_customer_3pd_data_share_opt_out",
            templateParams: [],
          });
          yield o("WAWebHandleSingleMsgFactory").handleSingleMsg({
            chatId: e,
            newMsg: n,
            handleSingleMsgOrigin: "createChat",
            preserveOrder: !1,
          });
        } catch (e) {
          o("WALogger").ERROR(
            y ||
              (y = babelHelpers.taggedTemplateLiteralLoose([
                "error:debug:dfsRenderPerCustomerDataSharingSystemMessage",
              ])),
          );
        }
      });
      return function (n, r) {
        return e.apply(this, arguments);
      };
    })();
    ((k.doc =
      "Creates and renders a system message of type biz_per_customer_3pd_data_share_opt_in or biz_per_customer_3pd_data_share_opt_out in the current chat."),
      (k.paramsToExecute = []));
    var I = {
      applyPerCustomerDataSharingMutations: C,
      sendPerCustomerDataSharingMutation: v,
      inspectPerCustomerDataSharingCollection: R,
      checkPerCustomerDataSharingStatus: L,
      clearPerCustomerDataSharingCollection: E,
      renderPerCustomerDataSharingSystemMessage: k,
    };
    l.default = I;
  },
  98,
);

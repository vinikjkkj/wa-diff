__d(
  "WAWebDebugPerCustomerDataSharing",
  [
    "WALogger",
    "WAWebContactSystemMsg",
    "WAWebCtwaPerCustomerDataSharingSync",
    "WAWebDataSharing3pdLidCollection",
    "WAWebHandleSingleMsgWorkerCompatible",
    "WAWebMsgType",
    "WAWebWamEnumSmbPerCustomerDataSharingControlEntryPoint",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _, f, g, h, y;
    async function C(e) {
      await r("WAWebCtwaPerCustomerDataSharingSync").applyMutations(e);
    }
    C.doc =
      "Apply per-customer data sharing mutations to the DB. This is used for testing syncd mutations only.";
    async function b(e, t) {
      var n = o("WAWebWidFactory").createUserLidOrThrow(e);
      return r(
        "WAWebCtwaPerCustomerDataSharingSync",
      ).sendPerCustomerDataSharingUpdate(
        n,
        t,
        o("WAWebWamEnumSmbPerCustomerDataSharingControlEntryPoint")
          .SMB_PER_CUSTOMER_DATA_SHARING_CONTROL_ENTRY_POINT.SYNCD_MUTATION,
      );
    }
    b.doc =
      "Send per-customer data sharing mutation to primary device through syncd. This will sync the setting to your Android/iOS device.";
    function v() {
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
    v.doc =
      "Inspect the current state of DataSharing3pdLidCollection. Shows total count and details of all records.";
    function S(e) {
      var t = o(
          "WAWebDataSharing3pdLidCollection",
        ).DataSharing3pdLidCollection.isDataSharingEnabled(e),
        n = o(
          "WAWebDataSharing3pdLidCollection",
        ).DataSharing3pdLidCollection.get(e);
      return (
        o("WALogger").LOG(
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
          ),
        t
      );
    }
    S.doc =
      "Check data sharing status for a specific customer LID. Returns whether sharing is enabled and shows model details if it exists.";
    function R() {
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
    R.doc =
      "Clear all records from DataSharing3pdLidCollection. Useful for testing initialization and syncing.";
    var L = async function (t, n) {
      try {
        var e = o("WAWebContactSystemMsg").genNotificationMsg(t, {
          type: "notification_template",
          kind: o("WAWebMsgType").MsgKind.NotificationTemplate,
          subtype: n
            ? "biz_per_customer_3pd_data_share_opt_in"
            : "biz_per_customer_3pd_data_share_opt_out",
          templateParams: [],
        });
        await o("WAWebHandleSingleMsgWorkerCompatible").handleSingleMsg({
          chatId: t,
          newMsg: e,
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
    };
    ((L.doc =
      "Creates and renders a system message of type biz_per_customer_3pd_data_share_opt_in or biz_per_customer_3pd_data_share_opt_out in the current chat."),
      (L.paramsToExecute = []));
    function E(e) {
      if (e.endsWith("@lid"))
        return { lid: e, pn: e.replace(/@lid$/, "") + "@s.whatsapp.net" };
      var t = e.replace(/@(?:s\.whatsapp\.net|c\.us)$/, "");
      return { lid: t + "@lid", pn: t + "@s.whatsapp.net" };
    }
    E.doc =
      "Derive a LID and PN pair from a serialized WID string. Handles both LID-based (@lid) and PN-based (@s.whatsapp.net, @c.us) WIDs.";
    var k = {
      applyPerCustomerDataSharingMutations: C,
      sendPerCustomerDataSharingMutation: b,
      inspectPerCustomerDataSharingCollection: v,
      checkPerCustomerDataSharingStatus: S,
      clearPerCustomerDataSharingCollection: R,
      renderPerCustomerDataSharingSystemMessage: L,
      deriveLidPnFromSerializedWid: E,
    };
    l.default = k;
  },
  98,
);

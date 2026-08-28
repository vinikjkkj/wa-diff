__d(
  "FrontierCardFormUPLLogger",
  [
    "ClientAddFrontiercardformFailFalcoEvent",
    "ClientAddFrontiercardformSuccessFalcoEvent",
    "ClientEditFrontiercardformFailFalcoEvent",
    "ClientEditFrontiercardformSuccessFalcoEvent",
    "ClientRenderFrontiercardformFailFalcoEvent",
    "ClientRenderFrontiercardformInitFalcoEvent",
    "ClientRenderFrontiercardformSuccessFalcoEvent",
    "FrontierComponentsBaseUPLLogger",
    "UserAddFrontiercardformSubmitFalcoEvent",
    "UserClickFrontiercardformAtomicFalcoEvent",
    "UserEditFrontiercardformAtomicFalcoEvent",
    "UserEditFrontiercardformSubmitFalcoEvent",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
      function t() {
        return e.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.createCommonPayload = function (t, n) {
          return {
            actual_event_time: Date.now().toString(),
            event_payload: t,
            extra_data: n != null ? n : void 0,
            platform: this.getPlatform(),
            product_type: this.createBasicPayload().payment_type,
            session_id: this.getSessionID(),
          };
        }),
        (n.logFrontierClientLoadCardFormInit = function (t, n, o, a, i) {
          var e,
            l,
            s = this,
            u = {
              flow_session_id:
                (e = this.getFlowSessionID()) != null ? e : void 0,
              frontier_logging_identifier: i != null ? i : void 0,
              payment_account_id: a != null ? a : void 0,
              product_id: (l = this.getPaymentProductId()) != null ? l : void 0,
              view_name: t,
              wizard_name: n != null ? n : void 0,
            };
          r("ClientRenderFrontiercardformInitFalcoEvent").log(function () {
            return s.createCommonPayload(u);
          });
        }),
        (n.logFrontierClientLoadCardFormSuccess = function (t, n, o, a, i) {
          var e,
            l,
            s = this,
            u = {
              flow_session_id:
                (e = this.getFlowSessionID()) != null ? e : void 0,
              frontier_logging_identifier: i != null ? i : void 0,
              payment_account_id: a != null ? a : void 0,
              product_id: (l = this.getPaymentProductId()) != null ? l : void 0,
              view_name: t,
              wizard_name: n != null ? n : void 0,
            };
          r("ClientRenderFrontiercardformSuccessFalcoEvent").log(function () {
            return s.createCommonPayload(u);
          });
        }),
        (n.logFrontierClientLoadCardFormFail = function (t, n, o, a, i) {
          var e,
            l,
            s = this,
            u = {
              flow_session_id:
                (e = this.getFlowSessionID()) != null ? e : void 0,
              frontier_logging_identifier: i != null ? i : void 0,
              payment_account_id: a != null ? a : void 0,
              product_id: (l = this.getPaymentProductId()) != null ? l : void 0,
              view_name: t,
              wizard_name: n != null ? n : void 0,
            };
          r("ClientRenderFrontiercardformFailFalcoEvent").log(function () {
            return s.createCommonPayload(u);
          });
        }),
        (n.logFrontierUserClickCardFormAtomic = function (t, n, o, a, i, l) {
          var e,
            s,
            u = this,
            c = {
              credential_id: a != null ? a : void 0,
              flow_session_id:
                (e = this.getFlowSessionID()) != null ? e : void 0,
              frontier_logging_identifier: l != null ? l : void 0,
              payment_account_id: i != null ? i : void 0,
              product_id: (s = this.getPaymentProductId()) != null ? s : void 0,
              target_name: o,
              view_name: t,
              wizard_name: n != null ? n : void 0,
            };
          r("UserClickFrontiercardformAtomicFalcoEvent").log(function () {
            return u.createCommonPayload(c);
          });
        }),
        (n.logFrontierUserEditCardFormAtomic = function (t, n, o, a, i, l) {
          var e,
            s,
            u = this,
            c = {
              credential_id: a != null ? a : void 0,
              flow_session_id:
                (e = this.getFlowSessionID()) != null ? e : void 0,
              frontier_logging_identifier: l != null ? l : void 0,
              payment_account_id: i != null ? i : void 0,
              product_id: (s = this.getPaymentProductId()) != null ? s : void 0,
              target_name: n,
              view_name: t,
              wizard_name: o != null ? o : void 0,
            };
          r("UserEditFrontiercardformAtomicFalcoEvent").log(function () {
            return u.createCommonPayload(c);
          });
        }),
        (n.logFrontierUserAddCardFormSubmit = function (t, n, o, a, i, l, s) {
          var e,
            u,
            c = this,
            d = {
              credential_id: a != null ? a : void 0,
              flow_session_id:
                (e = this.getFlowSessionID()) != null ? e : void 0,
              frontier_logging_identifier: s != null ? s : void 0,
              payment_account_id: i != null ? i : void 0,
              product_id: (u = this.getPaymentProductId()) != null ? u : void 0,
              target_name: n,
              view_name: t,
              wizard_name: o != null ? o : void 0,
            };
          r("UserAddFrontiercardformSubmitFalcoEvent").log(function () {
            return c.createCommonPayload(d, l);
          });
        }),
        (n.logFrontierUserEditCardFormSubmit = function (t, n, o, a, i, l) {
          var e,
            s,
            u = this,
            c = {
              credential_id: a != null ? a : void 0,
              flow_session_id:
                (e = this.getFlowSessionID()) != null ? e : void 0,
              frontier_logging_identifier: l != null ? l : void 0,
              payment_account_id: i != null ? i : void 0,
              product_id: (s = this.getPaymentProductId()) != null ? s : void 0,
              target_name: n,
              view_name: t,
              wizard_name: o != null ? o : void 0,
            };
          r("UserEditFrontiercardformSubmitFalcoEvent").log(function () {
            return u.createCommonPayload(c);
          });
        }),
        (n.logFrontierClientAddCardFormSuccess = function (t, n, o, a, i) {
          var e,
            l,
            s = this,
            u = {
              credential_id: o != null ? o : void 0,
              flow_session_id:
                (e = this.getFlowSessionID()) != null ? e : void 0,
              frontier_logging_identifier: i != null ? i : void 0,
              payment_account_id: a != null ? a : void 0,
              product_id: (l = this.getPaymentProductId()) != null ? l : void 0,
              view_name: t,
              wizard_name: n != null ? n : void 0,
            };
          r("ClientAddFrontiercardformSuccessFalcoEvent").log(function () {
            return s.createCommonPayload(u);
          });
        }),
        (n.logFrontierClientAddCardFormFail = function (t, n, o, a, i, l) {
          var e,
            s,
            u = this,
            c = {
              credential_id: o != null ? o : void 0,
              flow_session_id:
                (e = this.getFlowSessionID()) != null ? e : void 0,
              frontier_logging_identifier: l != null ? l : void 0,
              payment_account_id: a != null ? a : void 0,
              product_id: (s = this.getPaymentProductId()) != null ? s : void 0,
              view_name: t,
              wizard_name: n != null ? n : void 0,
            };
          r("ClientAddFrontiercardformFailFalcoEvent").log(function () {
            return u.createCommonPayload(c, i);
          });
        }),
        (n.logFrontierClientEditCardFormSuccess = function (t, n, o, a, i) {
          var e,
            l,
            s = this,
            u = {
              credential_id: o != null ? o : void 0,
              flow_session_id:
                (e = this.getFlowSessionID()) != null ? e : void 0,
              frontier_logging_identifier: i != null ? i : void 0,
              payment_account_id: a != null ? a : void 0,
              product_id: (l = this.getPaymentProductId()) != null ? l : void 0,
              view_name: t,
              wizard_name: n != null ? n : void 0,
            };
          r("ClientEditFrontiercardformSuccessFalcoEvent").log(function () {
            return s.createCommonPayload(u);
          });
        }),
        (n.logFrontierClientEditCardFormFail = function (t, n, o, a, i) {
          var e,
            l,
            s = this,
            u = {
              credential_id: o != null ? o : void 0,
              flow_session_id:
                (e = this.getFlowSessionID()) != null ? e : void 0,
              frontier_logging_identifier: i != null ? i : void 0,
              payment_account_id: a != null ? a : void 0,
              product_id: (l = this.getPaymentProductId()) != null ? l : void 0,
              view_name: t,
              wizard_name: n != null ? n : void 0,
            };
          r("ClientEditFrontiercardformFailFalcoEvent").log(function () {
            return s.createCommonPayload(u);
          });
        }),
        t
      );
    })(r("FrontierComponentsBaseUPLLogger"));
    l.default = e;
  },
  98,
);

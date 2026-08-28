__d(
  "FBPayECPAddressTypeaheadLogger",
  [
    "ClientAddDebugAtomicFalcoEvent",
    "ClientAddEcpaddresstypeaheadFailFalcoEvent",
    "ClientAddEcpaddresstypeaheadInitFalcoEvent",
    "ClientAddEcpaddresstypeaheadSuccessFalcoEvent",
    "ClientLoadEcpaddresstypeaheadInitFalcoEvent",
    "ClientLoadEcpaddresstypeaheadSuccessFalcoEvent",
    "FBPayBaseUPLLogger",
    "UserClickEcpaddresstypeaheadAtomicFalcoEvent",
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
        (n.__createTypeaheadCommonPayload = function () {
          var e = this.__getProductID();
          return {
            logging_policy: this.__getLoggingPolicy(),
            product_id: e.length !== 0 ? e : void 0,
          };
        }),
        (n.logClientAddEcpAddresstypeaheadFail = function (t) {
          var e = this;
          r("ClientAddEcpaddresstypeaheadFailFalcoEvent").log(function () {
            return babelHelpers.extends({}, e.__createBasicPayload(), {
              event_payload: babelHelpers.extends(
                {},
                e.__createTypeaheadCommonPayload(),
                { view_name: "address_typeahead" },
              ),
              extra_data: babelHelpers.extends(
                {},
                t,
                e.__createECPCommonExtraData(),
              ),
            });
          });
        }),
        (n.logClientAddEcpAddresstypeaheadInit = function () {
          var e = this;
          r("ClientAddEcpaddresstypeaheadInitFalcoEvent").log(function () {
            return babelHelpers.extends({}, e.__createBasicPayload(), {
              event_payload: babelHelpers.extends(
                {},
                e.__createTypeaheadCommonPayload(),
                { view_name: "address_typeahead" },
              ),
              extra_data: babelHelpers.extends(
                {},
                e.__createECPCommonExtraData(),
              ),
            });
          });
        }),
        (n.logClientAddEcpAddresstypeaheadSuccess = function (t) {
          var e = this;
          r("ClientAddEcpaddresstypeaheadSuccessFalcoEvent").log(function () {
            return babelHelpers.extends({}, e.__createBasicPayload(), {
              event_payload: babelHelpers.extends(
                {},
                e.__createTypeaheadCommonPayload(),
                { address_fields: t, view_name: "address_typeahead" },
              ),
              extra_data: babelHelpers.extends(
                {},
                e.__createECPCommonExtraData(),
              ),
            });
          });
        }),
        (n.logClientLoadEcpAddresstypeaheadFail = function (t) {
          var e = babelHelpers.extends({}, this.__createECPCommonExtraData());
        }),
        (n.logClientLoadEcpAddresstypeaheadInit = function () {
          var e = this;
          r("ClientLoadEcpaddresstypeaheadInitFalcoEvent").log(function () {
            return babelHelpers.extends({}, e.__createBasicPayload(), {
              event_payload: babelHelpers.extends(
                {},
                e.__createTypeaheadCommonPayload(),
                { view_name: "address_typeahead" },
              ),
              extra_data: babelHelpers.extends(
                {},
                e.__createECPCommonExtraData(),
              ),
            });
          });
        }),
        (n.logClientLoadEcpAddresstypeaheadSuccess = function () {
          var e = this;
          r("ClientLoadEcpaddresstypeaheadSuccessFalcoEvent").log(function () {
            return babelHelpers.extends({}, e.__createBasicPayload(), {
              event_payload: babelHelpers.extends(
                {},
                e.__createTypeaheadCommonPayload(),
                { view_name: "address_typeahead" },
              ),
              extra_data: babelHelpers.extends(
                {},
                e.__createECPCommonExtraData(),
              ),
            });
          });
        }),
        (n.logUserClickEcpAddresstypeaheadAtomic = function (t, n, o) {
          var e = this;
          r("UserClickEcpaddresstypeaheadAtomicFalcoEvent").log(function () {
            return babelHelpers.extends({}, e.__createBasicPayload(), {
              event_payload: babelHelpers.extends(
                {},
                e.__createTypeaheadCommonPayload(),
                {
                  selected_option: o != null ? o : "-1",
                  target_name: t,
                  user_input_len: n,
                  view_name: "address_typeahead",
                },
              ),
              extra_data: babelHelpers.extends(
                {},
                e.__createECPCommonExtraData(),
              ),
            });
          });
        }),
        (n.logClientAddDebugAtomic = function (t, n, o, a) {
          r("ClientAddDebugAtomicFalcoEvent").log(function () {
            return {
              actual_event_time: n,
              event_payload: o,
              extra_data: a,
              platform: "comet",
              product_type: "ecp",
              session_id: t,
            };
          });
        }),
        t
      );
    })(r("FBPayBaseUPLLogger"));
    l.default = e;
  },
  98,
);

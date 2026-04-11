__d(
  "WAWebPaymentsUserActionWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumMerchantTypeType",
    "WAWebWamEnumP2mTypeType",
    "WAWebWamEnumPaymentActionTargets",
    "WAWebWamEnumPaymentActionTypes",
    "WAWebWamEnumPaymentModeTypes",
    "WAWebWamEnumPaymentTransactionStatusType",
    "WAWebWamEnumPaymentsContactsBucketType",
    "WAWebWamEnumPaymentsIqCall",
    "WAWebWamEnumPaymentsRequestNameType",
    "WAWebWamEnumPaymentsResponseResultType",
    "WAWebWamEnumPaymentsUpiCheckPinUserErrorReasonType",
    "WAWebWamEnumPaymentsVerifyCardResultType",
    "WAWebWamEnumUpiPaymentsPspIdType",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          PaymentsUserAction: [
            2162,
            {
              actionTarget: [
                4,
                o("WAWebWamEnumPaymentActionTargets").PAYMENT_ACTION_TARGETS,
              ],
              merchantType: [
                43,
                o("WAWebWamEnumMerchantTypeType").MERCHANT_TYPE_TYPE,
              ],
              p2mType: [44, o("WAWebWamEnumP2mTypeType").P2M_TYPE_TYPE],
              paymentAccountRowSelected: [24, e.TYPES.INTEGER],
              paymentActionType: [
                3,
                o("WAWebWamEnumPaymentActionTypes").PAYMENT_ACTION_TYPES,
              ],
              paymentMode: [
                7,
                o("WAWebWamEnumPaymentModeTypes").PAYMENT_MODE_TYPES,
              ],
              paymentNumberOfAccountsAvailable: [23, e.TYPES.INTEGER],
              paymentNumberOfPeopleInvited: [32, e.TYPES.INTEGER],
              paymentPinSetUp: [33, e.TYPES.BOOLEAN],
              paymentSent: [34, e.TYPES.BOOLEAN],
              paymentSmsProviderNumber: [15, e.TYPES.STRING],
              paymentTransactionStatus: [
                45,
                o("WAWebWamEnumPaymentTransactionStatusType")
                  .PAYMENT_TRANSACTION_STATUS_TYPE,
              ],
              paymentsAccountsExist: [13, e.TYPES.BOOLEAN],
              paymentsBankId: [11, e.TYPES.STRING],
              paymentsBanksRowSelected: [22, e.TYPES.INTEGER],
              paymentsBanksScrolled: [21, e.TYPES.BOOLEAN],
              paymentsBanksSearchActivated: [18, e.TYPES.BOOLEAN],
              paymentsBanksSearchSelected: [20, e.TYPES.BOOLEAN],
              paymentsBanksSearchString: [19, e.TYPES.STRING],
              paymentsBanksSelectedName: [25, e.TYPES.STRING],
              paymentsContactsBucket: [
                31,
                o("WAWebWamEnumPaymentsContactsBucketType")
                  .PAYMENTS_CONTACTS_BUCKET_TYPE,
              ],
              paymentsCountryCode: [2, e.TYPES.STRING],
              paymentsErrorCode: [9, e.TYPES.STRING],
              paymentsErrorText: [10, e.TYPES.STRING],
              paymentsErrorTitle: [47, e.TYPES.STRING],
              paymentsEventId: [1, e.TYPES.STRING],
              paymentsHasMultipleSims: [29, e.TYPES.BOOLEAN],
              paymentsIqCallStatus: [
                42,
                o("WAWebWamEnumPaymentsIqCall").PAYMENTS_IQ_CALL,
              ],
              paymentsIsMandate: [40, e.TYPES.BOOLEAN],
              paymentsIsOrder: [36, e.TYPES.BOOLEAN],
              paymentsMandate: [41, e.TYPES.STRING],
              paymentsOrderType: [38, e.TYPES.STRING],
              paymentsP2mPaymentConfigId: [39, e.TYPES.STRING],
              paymentsRequestName: [
                17,
                o("WAWebWamEnumPaymentsRequestNameType")
                  .PAYMENTS_REQUEST_NAME_TYPE,
              ],
              paymentsRequestRetryCount: [26, e.TYPES.INTEGER],
              paymentsRequestRetryTimeDelaySeconds: [27, e.TYPES.INTEGER],
              paymentsResponseResult: [
                12,
                o("WAWebWamEnumPaymentsResponseResultType")
                  .PAYMENTS_RESPONSE_RESULT_TYPE,
              ],
              paymentsSmsProviderRetryCount: [14, e.TYPES.INTEGER],
              paymentsSmsRequestRetryCount: [16, e.TYPES.INTEGER],
              paymentsUpiCheckPinErrorReason: [
                28,
                o("WAWebWamEnumPaymentsUpiCheckPinUserErrorReasonType")
                  .PAYMENTS_UPI_CHECK_PIN_USER_ERROR_REASON_TYPE,
              ],
              paymentsVerifyCardResult: [
                30,
                o("WAWebWamEnumPaymentsVerifyCardResultType")
                  .PAYMENTS_VERIFY_CARD_RESULT_TYPE,
              ],
              previousScreenName: [46, e.TYPES.STRING],
              queryParams: [35, e.TYPES.STRING],
              referral: [6, e.TYPES.STRING],
              referralContext: [37, e.TYPES.STRING],
              screen: [5, e.TYPES.STRING],
              upiPaymentsPspId: [
                8,
                o("WAWebWamEnumUpiPaymentsPspIdType").UPI_PAYMENTS_PSP_ID_TYPE,
              ],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { PaymentsUserAction: [] },
      );
    l.PaymentsUserActionWamEvent = s;
  },
  98,
);

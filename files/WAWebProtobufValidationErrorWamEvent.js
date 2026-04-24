__d(
  "WAWebProtobufValidationErrorWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumProtobufCorrelationOutcome",
    "WAWebWamEnumProtobufValidationFlow",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          ProtobufValidationError: [
            6110,
            {
              protobufCorrelationOutcome: [
                8,
                o("WAWebWamEnumProtobufCorrelationOutcome")
                  .PROTOBUF_CORRELATION_OUTCOME,
              ],
              protobufLegacyValidationDropped: [7, e.TYPES.BOOLEAN],
              protobufValidationContext: [9, e.TYPES.INTEGER],
              protobufValidationDropped: [1, e.TYPES.BOOLEAN],
              protobufValidationErrorMessage: [2, e.TYPES.STRING],
              protobufValidationExpression: [3, e.TYPES.STRING],
              protobufValidationFlow: [
                4,
                o("WAWebWamEnumProtobufValidationFlow")
                  .PROTOBUF_VALIDATION_FLOW,
              ],
              protobufValidationPath: [5, e.TYPES.STRING],
              protobufValidationRuleId: [6, e.TYPES.STRING],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { ProtobufValidationError: [] },
      );
    l.ProtobufValidationErrorWamEvent = s;
  },
  98,
);

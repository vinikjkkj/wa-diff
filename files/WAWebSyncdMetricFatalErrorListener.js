__d(
  "WAWebSyncdMetricFatalErrorListener",
  ["WAWebSyncdMetricFatalError", "WAWebWamEnumMdSyncdFatalErrorCode"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return e ===
        o("WAWebSyncdMetricFatalError").SyncdFatalErrorType
          .PATCH_PROTOBUF_SERIALIZATION_FAILED
        ? o("WAWebWamEnumMdSyncdFatalErrorCode").MD_SYNCD_FATAL_ERROR_CODE
            .PATCH_PROTOBUF_SERIALIZATION_FAILED
        : e ===
            o("WAWebSyncdMetricFatalError").SyncdFatalErrorType
              .MUTATIONS_PROTOBUF_SERIALIZATION_FAILED
          ? o("WAWebWamEnumMdSyncdFatalErrorCode").MD_SYNCD_FATAL_ERROR_CODE
              .MUTATIONS_PROTOBUF_SERIALIZATION_FAILED
          : e ===
              o("WAWebSyncdMetricFatalError").SyncdFatalErrorType
                .ACTION_DATA_PROTOBUF_SERIALIZATION_FAILED
            ? o("WAWebWamEnumMdSyncdFatalErrorCode").MD_SYNCD_FATAL_ERROR_CODE
                .ACTION_DATA_PROTOBUF_SERIALIZATION_FAILED
            : e ===
                o("WAWebSyncdMetricFatalError").SyncdFatalErrorType
                  .ENCRYPTION_FAILED
              ? o("WAWebWamEnumMdSyncdFatalErrorCode").MD_SYNCD_FATAL_ERROR_CODE
                  .ENCRYPTION_FAILED
              : e ===
                  o("WAWebSyncdMetricFatalError").SyncdFatalErrorType
                    .MISSING_SNAPSHOT_VERSION
                ? o("WAWebWamEnumMdSyncdFatalErrorCode")
                    .MD_SYNCD_FATAL_ERROR_CODE.MISSING_SNAPSHOT_VERSION
                : e ===
                    o("WAWebSyncdMetricFatalError").SyncdFatalErrorType
                      .MISSING_SNAPSHOT_MAC
                  ? o("WAWebWamEnumMdSyncdFatalErrorCode")
                      .MD_SYNCD_FATAL_ERROR_CODE.MISSING_SNAPSHOT_MAC
                  : e ===
                      o("WAWebSyncdMetricFatalError").SyncdFatalErrorType
                        .MISSING_SNAPSHOT_KEY_ID
                    ? o("WAWebWamEnumMdSyncdFatalErrorCode")
                        .MD_SYNCD_FATAL_ERROR_CODE.MISSING_SNAPSHOT_KEY_ID
                    : e ===
                        o("WAWebSyncdMetricFatalError").SyncdFatalErrorType
                          .MISSING_PATCH_VERSION
                      ? o("WAWebWamEnumMdSyncdFatalErrorCode")
                          .MD_SYNCD_FATAL_ERROR_CODE.MISSING_PATCH_VERSION
                      : e ===
                          o("WAWebSyncdMetricFatalError").SyncdFatalErrorType
                            .PATCH_WITH_BOTH_INLINE_AND_EXTERNAL_MUTATIONS
                        ? o("WAWebWamEnumMdSyncdFatalErrorCode")
                            .MD_SYNCD_FATAL_ERROR_CODE
                            .PATCH_WITH_BOTH_INLINE_AND_EXTERNAL_MUTATIONS
                        : e ===
                            o("WAWebSyncdMetricFatalError").SyncdFatalErrorType
                              .MISSING_PATCH_SNAPSHOT_MAC
                          ? o("WAWebWamEnumMdSyncdFatalErrorCode")
                              .MD_SYNCD_FATAL_ERROR_CODE
                              .MISSING_PATCH_SNAPSHOT_MAC
                          : e ===
                              o("WAWebSyncdMetricFatalError")
                                .SyncdFatalErrorType.MISSING_PATCH_MAC
                            ? o("WAWebWamEnumMdSyncdFatalErrorCode")
                                .MD_SYNCD_FATAL_ERROR_CODE.MISSING_PATCH_MAC
                            : e ===
                                o("WAWebSyncdMetricFatalError")
                                  .SyncdFatalErrorType.MISSING_PATCH_KEY_ID
                              ? o("WAWebWamEnumMdSyncdFatalErrorCode")
                                  .MD_SYNCD_FATAL_ERROR_CODE
                                  .MISSING_PATCH_KEY_ID
                              : e ===
                                  o("WAWebSyncdMetricFatalError")
                                    .SyncdFatalErrorType
                                    .MISSING_EXTERNAL_BLOB_REFERENCE_MEDIA_KEY
                                ? o("WAWebWamEnumMdSyncdFatalErrorCode")
                                    .MD_SYNCD_FATAL_ERROR_CODE
                                    .MISSING_EXTERNAL_BLOB_REFERENCE_MEDIA_KEY
                                : e ===
                                    o("WAWebSyncdMetricFatalError")
                                      .SyncdFatalErrorType
                                      .MISSING_EXTERNAL_BLOB_REFERENCE_DIRECT_PATH
                                  ? o("WAWebWamEnumMdSyncdFatalErrorCode")
                                      .MD_SYNCD_FATAL_ERROR_CODE
                                      .MISSING_EXTERNAL_BLOB_REFERENCE_DIRECT_PATH
                                  : e ===
                                      o("WAWebSyncdMetricFatalError")
                                        .SyncdFatalErrorType
                                        .MISSING_EXTERNAL_BLOB_REFERENCE_FILE_SHA256
                                    ? o("WAWebWamEnumMdSyncdFatalErrorCode")
                                        .MD_SYNCD_FATAL_ERROR_CODE
                                        .MISSING_EXTERNAL_BLOB_REFERENCE_FILE_SHA256
                                    : e ===
                                        o("WAWebSyncdMetricFatalError")
                                          .SyncdFatalErrorType
                                          .MISSING_EXTERNAL_BLOB_REFERENCE_FILE_ENC_SHA256
                                      ? o("WAWebWamEnumMdSyncdFatalErrorCode")
                                          .MD_SYNCD_FATAL_ERROR_CODE
                                          .MISSING_EXTERNAL_BLOB_REFERENCE_FILE_ENC_SHA256
                                      : e ===
                                          o("WAWebSyncdMetricFatalError")
                                            .SyncdFatalErrorType
                                            .MISSING_MUTATION_OPERATION
                                        ? o("WAWebWamEnumMdSyncdFatalErrorCode")
                                            .MD_SYNCD_FATAL_ERROR_CODE
                                            .MISSING_MUTATION_OPERATION
                                        : e ===
                                            o("WAWebSyncdMetricFatalError")
                                              .SyncdFatalErrorType
                                              .MISSING_MUTATION_RECORD
                                          ? o(
                                              "WAWebWamEnumMdSyncdFatalErrorCode",
                                            ).MD_SYNCD_FATAL_ERROR_CODE
                                              .MISSING_MUTATION_RECORD
                                          : e ===
                                              o("WAWebSyncdMetricFatalError")
                                                .SyncdFatalErrorType
                                                .MISSING_MUTATION_INDEX
                                            ? o(
                                                "WAWebWamEnumMdSyncdFatalErrorCode",
                                              ).MD_SYNCD_FATAL_ERROR_CODE
                                                .MISSING_MUTATION_INDEX
                                            : e ===
                                                o("WAWebSyncdMetricFatalError")
                                                  .SyncdFatalErrorType
                                                  .MISSING_MUTATION_VALUE
                                              ? o(
                                                  "WAWebWamEnumMdSyncdFatalErrorCode",
                                                ).MD_SYNCD_FATAL_ERROR_CODE
                                                  .MISSING_MUTATION_VALUE
                                              : e ===
                                                  o(
                                                    "WAWebSyncdMetricFatalError",
                                                  ).SyncdFatalErrorType
                                                    .MISSING_MUTATION_KEY_ID
                                                ? o(
                                                    "WAWebWamEnumMdSyncdFatalErrorCode",
                                                  ).MD_SYNCD_FATAL_ERROR_CODE
                                                    .MISSING_MUTATION_KEY_ID
                                                : e ===
                                                    o(
                                                      "WAWebSyncdMetricFatalError",
                                                    ).SyncdFatalErrorType
                                                      .EXTERNAL_BLOB_REFERENCE_PROTOBUF_DESERIALIZATION_FAILED
                                                  ? o(
                                                      "WAWebWamEnumMdSyncdFatalErrorCode",
                                                    ).MD_SYNCD_FATAL_ERROR_CODE
                                                      .EXTERNAL_BLOB_REFERENCE_PROTOBUF_DESERIALIZATION_FAILED
                                                  : e ===
                                                      o(
                                                        "WAWebSyncdMetricFatalError",
                                                      ).SyncdFatalErrorType
                                                        .SNAPSHOT_PROTOBUF_DESERIALIZATION_FAILED
                                                    ? o(
                                                        "WAWebWamEnumMdSyncdFatalErrorCode",
                                                      )
                                                        .MD_SYNCD_FATAL_ERROR_CODE
                                                        .SNAPSHOT_PROTOBUF_DESERIALIZATION_FAILED
                                                    : e ===
                                                        o(
                                                          "WAWebSyncdMetricFatalError",
                                                        ).SyncdFatalErrorType
                                                          .PATCH_PROTOBUF_DESERIALIZATION_FAILED
                                                      ? o(
                                                          "WAWebWamEnumMdSyncdFatalErrorCode",
                                                        )
                                                          .MD_SYNCD_FATAL_ERROR_CODE
                                                          .PATCH_PROTOBUF_DESERIALIZATION_FAILED
                                                      : e ===
                                                          o(
                                                            "WAWebSyncdMetricFatalError",
                                                          ).SyncdFatalErrorType
                                                            .MUTATIONS_PROTOBUF_DESERIALIZATION_FAILED
                                                        ? o(
                                                            "WAWebWamEnumMdSyncdFatalErrorCode",
                                                          )
                                                            .MD_SYNCD_FATAL_ERROR_CODE
                                                            .MUTATIONS_PROTOBUF_DESERIALIZATION_FAILED
                                                        : e ===
                                                            o(
                                                              "WAWebSyncdMetricFatalError",
                                                            )
                                                              .SyncdFatalErrorType
                                                              .ACTION_DATA_PROTOBUF_DESERIALIZATION_FAILED
                                                          ? o(
                                                              "WAWebWamEnumMdSyncdFatalErrorCode",
                                                            )
                                                              .MD_SYNCD_FATAL_ERROR_CODE
                                                              .ACTION_DATA_PROTOBUF_DESERIALIZATION_FAILED
                                                          : e ===
                                                              o(
                                                                "WAWebSyncdMetricFatalError",
                                                              )
                                                                .SyncdFatalErrorType
                                                                .MISSING_ACTION_INDEX
                                                            ? o(
                                                                "WAWebWamEnumMdSyncdFatalErrorCode",
                                                              )
                                                                .MD_SYNCD_FATAL_ERROR_CODE
                                                                .MISSING_ACTION_INDEX
                                                            : e ===
                                                                o(
                                                                  "WAWebSyncdMetricFatalError",
                                                                )
                                                                  .SyncdFatalErrorType
                                                                  .MISSING_ACTION_VERSION
                                                              ? o(
                                                                  "WAWebWamEnumMdSyncdFatalErrorCode",
                                                                )
                                                                  .MD_SYNCD_FATAL_ERROR_CODE
                                                                  .MISSING_ACTION_VERSION
                                                              : e ===
                                                                  o(
                                                                    "WAWebSyncdMetricFatalError",
                                                                  )
                                                                    .SyncdFatalErrorType
                                                                    .SNAPSHOT_MAC_MISMATCH_IN_SNAPSHOT
                                                                ? o(
                                                                    "WAWebWamEnumMdSyncdFatalErrorCode",
                                                                  )
                                                                    .MD_SYNCD_FATAL_ERROR_CODE
                                                                    .SNAPSHOT_MAC_MISMATCH_IN_SNAPSHOT
                                                                : e ===
                                                                    o(
                                                                      "WAWebSyncdMetricFatalError",
                                                                    )
                                                                      .SyncdFatalErrorType
                                                                      .SNAPSHOT_MAC_MISMATCH_IN_PATCH
                                                                  ? o(
                                                                      "WAWebWamEnumMdSyncdFatalErrorCode",
                                                                    )
                                                                      .MD_SYNCD_FATAL_ERROR_CODE
                                                                      .SNAPSHOT_MAC_MISMATCH_IN_PATCH
                                                                  : e ===
                                                                      o(
                                                                        "WAWebSyncdMetricFatalError",
                                                                      )
                                                                        .SyncdFatalErrorType
                                                                        .MAC_MISMATCH_PATCH
                                                                    ? o(
                                                                        "WAWebWamEnumMdSyncdFatalErrorCode",
                                                                      )
                                                                        .MD_SYNCD_FATAL_ERROR_CODE
                                                                        .MAC_MISMATCH_PATCH
                                                                    : e ===
                                                                        o(
                                                                          "WAWebSyncdMetricFatalError",
                                                                        )
                                                                          .SyncdFatalErrorType
                                                                          .DECRYPTION_FAILED
                                                                      ? o(
                                                                          "WAWebWamEnumMdSyncdFatalErrorCode",
                                                                        )
                                                                          .MD_SYNCD_FATAL_ERROR_CODE
                                                                          .DECRYPTION_FAILED
                                                                      : e ===
                                                                          o(
                                                                            "WAWebSyncdMetricFatalError",
                                                                          )
                                                                            .SyncdFatalErrorType
                                                                            .DUPLICATE_PATCH_VERSION_IN_COLLECTION
                                                                        ? o(
                                                                            "WAWebWamEnumMdSyncdFatalErrorCode",
                                                                          )
                                                                            .MD_SYNCD_FATAL_ERROR_CODE
                                                                            .DUPLICATE_PATCH_VERSION_IN_COLLECTION
                                                                        : e ===
                                                                            o(
                                                                              "WAWebSyncdMetricFatalError",
                                                                            )
                                                                              .SyncdFatalErrorType
                                                                              .SAME_INDEX_FOR_MULTIPLE_MUTATIONS_IN_PATCH
                                                                          ? o(
                                                                              "WAWebWamEnumMdSyncdFatalErrorCode",
                                                                            )
                                                                              .MD_SYNCD_FATAL_ERROR_CODE
                                                                              .SAME_INDEX_FOR_MULTIPLE_MUTATIONS_IN_PATCH
                                                                          : e ===
                                                                              o(
                                                                                "WAWebSyncdMetricFatalError",
                                                                              )
                                                                                .SyncdFatalErrorType
                                                                                .SAME_INDEX_FOR_MULTIPLE_MUTATIONS_IN_SNAPSHOT
                                                                            ? o(
                                                                                "WAWebWamEnumMdSyncdFatalErrorCode",
                                                                              )
                                                                                .MD_SYNCD_FATAL_ERROR_CODE
                                                                                .SAME_INDEX_FOR_MULTIPLE_MUTATIONS_IN_SNAPSHOT
                                                                            : e ===
                                                                                o(
                                                                                  "WAWebSyncdMetricFatalError",
                                                                                )
                                                                                  .SyncdFatalErrorType
                                                                                  .MISSING_ACTION_VALUE
                                                                              ? o(
                                                                                  "WAWebWamEnumMdSyncdFatalErrorCode",
                                                                                )
                                                                                  .MD_SYNCD_FATAL_ERROR_CODE
                                                                                  .MISSING_ACTION_VALUE
                                                                              : e ===
                                                                                  o(
                                                                                    "WAWebSyncdMetricFatalError",
                                                                                  )
                                                                                    .SyncdFatalErrorType
                                                                                    .MISSING_ACTION_TIMESTAMP
                                                                                ? o(
                                                                                    "WAWebWamEnumMdSyncdFatalErrorCode",
                                                                                  )
                                                                                    .MD_SYNCD_FATAL_ERROR_CODE
                                                                                    .MISSING_ACTION_TIMESTAMP
                                                                                : e ===
                                                                                    o(
                                                                                      "WAWebSyncdMetricFatalError",
                                                                                    )
                                                                                      .SyncdFatalErrorType
                                                                                      .XMPP_BAD_REQUEST_FOR_COLLECTION
                                                                                  ? o(
                                                                                      "WAWebWamEnumMdSyncdFatalErrorCode",
                                                                                    )
                                                                                      .MD_SYNCD_FATAL_ERROR_CODE
                                                                                      .XMPP_BAD_REQUEST_FOR_COLLECTION
                                                                                  : e ===
                                                                                      o(
                                                                                        "WAWebSyncdMetricFatalError",
                                                                                      )
                                                                                        .SyncdFatalErrorType
                                                                                        .XMPP_NOT_FOUND_FOR_COLLECTION
                                                                                    ? o(
                                                                                        "WAWebWamEnumMdSyncdFatalErrorCode",
                                                                                      )
                                                                                        .MD_SYNCD_FATAL_ERROR_CODE
                                                                                        .XMPP_NOT_FOUND_FOR_COLLECTION
                                                                                    : e ===
                                                                                        o(
                                                                                          "WAWebSyncdMetricFatalError",
                                                                                        )
                                                                                          .SyncdFatalErrorType
                                                                                          .CYCLIC_MUTATION_DEPENDENCY_IN_PATCH
                                                                                      ? o(
                                                                                          "WAWebWamEnumMdSyncdFatalErrorCode",
                                                                                        )
                                                                                          .MD_SYNCD_FATAL_ERROR_CODE
                                                                                          .CYCLIC_MUTATION_DEPENDENCY_IN_PATCH
                                                                                      : e ===
                                                                                          o(
                                                                                            "WAWebSyncdMetricFatalError",
                                                                                          )
                                                                                            .SyncdFatalErrorType
                                                                                            .SERVER_DID_NOT_SEND_ALL_PATCHES
                                                                                        ? o(
                                                                                            "WAWebWamEnumMdSyncdFatalErrorCode",
                                                                                          )
                                                                                            .MD_SYNCD_FATAL_ERROR_CODE
                                                                                            .SERVER_DID_NOT_SEND_ALL_PATCHES
                                                                                        : e ===
                                                                                            o(
                                                                                              "WAWebSyncdMetricFatalError",
                                                                                            )
                                                                                              .SyncdFatalErrorType
                                                                                              .TERMINAL_PATCH_MISSING_DATA
                                                                                          ? o(
                                                                                              "WAWebWamEnumMdSyncdFatalErrorCode",
                                                                                            )
                                                                                              .MD_SYNCD_FATAL_ERROR_CODE
                                                                                              .TERMINAL_PATCH_MISSING_DATA
                                                                                          : e ===
                                                                                              o(
                                                                                                "WAWebSyncdMetricFatalError",
                                                                                              )
                                                                                                .SyncdFatalErrorType
                                                                                                .TERMINAL_PATCH_DESERIALIZATION_ERROR
                                                                                            ? o(
                                                                                                "WAWebWamEnumMdSyncdFatalErrorCode",
                                                                                              )
                                                                                                .MD_SYNCD_FATAL_ERROR_CODE
                                                                                                .TERMINAL_PATCH_DESERIALIZATION_ERROR
                                                                                            : e ===
                                                                                                o(
                                                                                                  "WAWebSyncdMetricFatalError",
                                                                                                )
                                                                                                  .SyncdFatalErrorType
                                                                                                  .TERMINAL_PATCH_UNKNOWN
                                                                                              ? o(
                                                                                                  "WAWebWamEnumMdSyncdFatalErrorCode",
                                                                                                )
                                                                                                  .MD_SYNCD_FATAL_ERROR_CODE
                                                                                                  .TERMINAL_PATCH_UNKNOWN
                                                                                              : e ===
                                                                                                  o(
                                                                                                    "WAWebSyncdMetricFatalError",
                                                                                                  )
                                                                                                    .SyncdFatalErrorType
                                                                                                    .INVALID_ACTION_INDEX
                                                                                                ? o(
                                                                                                    "WAWebWamEnumMdSyncdFatalErrorCode",
                                                                                                  )
                                                                                                    .MD_SYNCD_FATAL_ERROR_CODE
                                                                                                    .INVALID_ACTION_INDEX
                                                                                                : e ===
                                                                                                    o(
                                                                                                      "WAWebSyncdMetricFatalError",
                                                                                                    )
                                                                                                      .SyncdFatalErrorType
                                                                                                      .XMPP_BAD_REQUEST_GLOBAL_ERROR
                                                                                                  ? o(
                                                                                                      "WAWebWamEnumMdSyncdFatalErrorCode",
                                                                                                    )
                                                                                                      .MD_SYNCD_FATAL_ERROR_CODE
                                                                                                      .XMPP_BAD_REQUEST_GLOBAL_ERROR
                                                                                                  : e ===
                                                                                                      o(
                                                                                                        "WAWebSyncdMetricFatalError",
                                                                                                      )
                                                                                                        .SyncdFatalErrorType
                                                                                                        .XMPP_NOT_FOUND_GLOBAL_ERROR
                                                                                                    ? o(
                                                                                                        "WAWebWamEnumMdSyncdFatalErrorCode",
                                                                                                      )
                                                                                                        .MD_SYNCD_FATAL_ERROR_CODE
                                                                                                        .XMPP_NOT_FOUND_GLOBAL_ERROR
                                                                                                    : e ===
                                                                                                        o(
                                                                                                          "WAWebSyncdMetricFatalError",
                                                                                                        )
                                                                                                          .SyncdFatalErrorType
                                                                                                          .XMPP_BAD_METHOD_GLOBAL_ERROR
                                                                                                      ? o(
                                                                                                          "WAWebWamEnumMdSyncdFatalErrorCode",
                                                                                                        )
                                                                                                          .MD_SYNCD_FATAL_ERROR_CODE
                                                                                                          .XMPP_BAD_METHOD_GLOBAL_ERROR
                                                                                                      : e ===
                                                                                                          o(
                                                                                                            "WAWebSyncdMetricFatalError",
                                                                                                          )
                                                                                                            .SyncdFatalErrorType
                                                                                                            .XMPP_NOT_ACCEPTABLE_GLOBAL_ERROR
                                                                                                        ? o(
                                                                                                            "WAWebWamEnumMdSyncdFatalErrorCode",
                                                                                                          )
                                                                                                            .MD_SYNCD_FATAL_ERROR_CODE
                                                                                                            .XMPP_NOT_ACCEPTABLE_GLOBAL_ERROR
                                                                                                        : e ===
                                                                                                            o(
                                                                                                              "WAWebSyncdMetricFatalError",
                                                                                                            )
                                                                                                              .SyncdFatalErrorType
                                                                                                              .TOO_MANY_INTERNAL_SERVER_ERRORS_IN_7D
                                                                                                          ? o(
                                                                                                              "WAWebWamEnumMdSyncdFatalErrorCode",
                                                                                                            )
                                                                                                              .MD_SYNCD_FATAL_ERROR_CODE
                                                                                                              .TOO_MANY_INTERNAL_SERVER_ERRORS_IN_7D
                                                                                                          : e ===
                                                                                                              o(
                                                                                                                "WAWebSyncdMetricFatalError",
                                                                                                              )
                                                                                                                .SyncdFatalErrorType
                                                                                                                .TIMEOUT_WHILE_WAITING_FOR_MISSING_KEY
                                                                                                            ? o(
                                                                                                                "WAWebWamEnumMdSyncdFatalErrorCode",
                                                                                                              )
                                                                                                                .MD_SYNCD_FATAL_ERROR_CODE
                                                                                                                .TIMEOUT_WHILE_WAITING_FOR_MISSING_KEY
                                                                                                            : e ===
                                                                                                                o(
                                                                                                                  "WAWebSyncdMetricFatalError",
                                                                                                                )
                                                                                                                  .SyncdFatalErrorType
                                                                                                                  .MISSING_KEY_ON_ALL_CLIENTS
                                                                                                              ? o(
                                                                                                                  "WAWebWamEnumMdSyncdFatalErrorCode",
                                                                                                                )
                                                                                                                  .MD_SYNCD_FATAL_ERROR_CODE
                                                                                                                  .MISSING_KEY_ON_ALL_CLIENTS
                                                                                                              : e ===
                                                                                                                  o(
                                                                                                                    "WAWebSyncdMetricFatalError",
                                                                                                                  )
                                                                                                                    .SyncdFatalErrorType
                                                                                                                    .MALFORMED_MUTATION_CLEAR_CHAT
                                                                                                                ? o(
                                                                                                                    "WAWebWamEnumMdSyncdFatalErrorCode",
                                                                                                                  )
                                                                                                                    .MD_SYNCD_FATAL_ERROR_CODE
                                                                                                                    .MALFORMED_MUTATION_CLEAR_CHAT
                                                                                                                : e ===
                                                                                                                    o(
                                                                                                                      "WAWebSyncdMetricFatalError",
                                                                                                                    )
                                                                                                                      .SyncdFatalErrorType
                                                                                                                      .FAILED_MUTATION_CLEAR_CHAT
                                                                                                                  ? o(
                                                                                                                      "WAWebWamEnumMdSyncdFatalErrorCode",
                                                                                                                    )
                                                                                                                      .MD_SYNCD_FATAL_ERROR_CODE
                                                                                                                      .FAILED_MUTATION_CLEAR_CHAT
                                                                                                                  : (function () {
                                                                                                                      throw Error(
                                                                                                                        "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                                                                                                                          e,
                                                                                                                      );
                                                                                                                    })();
    }
    l.convertSyncdErrorCode = e;
  },
  98,
);

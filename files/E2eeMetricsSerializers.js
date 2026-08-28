__d(
  "E2eeMetricsSerializers",
  ["ThriftTypes"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s() {
      return {};
    }
    function u() {
      return {};
    }
    function c() {
      return { p2p_e2ee: s(), group_e2ee: u() };
    }
    function d(t, n) {
      if (
        (n.writeStructBegin("P2pE2eeMetrics"),
        t.engine_type != null &&
          (n.writeFieldBegin({
            fname: "engine_type",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 1,
          }),
          n.writeI64(BigInt(t.engine_type)),
          n.writeFieldEnd()),
        t.status != null &&
          (n.writeFieldBegin({
            fname: "status",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 2,
          }),
          n.writeI64(BigInt(t.status)),
          n.writeFieldEnd()),
        t.version != null &&
          (n.writeFieldBegin({
            fname: "version",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 3,
          }),
          n.writeI64(BigInt(t.version)),
          n.writeFieldEnd()),
        t.gen_prekey_bundle_time_ms != null &&
          (n.writeFieldBegin({
            fname: "gen_prekey_bundle_time_ms",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 4,
          }),
          n.writeI64(BigInt(t.gen_prekey_bundle_time_ms)),
          n.writeFieldEnd()),
        t.encrypted_msg_time_ms != null &&
          (n.writeFieldBegin({
            fname: "encrypted_msg_time_ms",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 5,
          }),
          n.writeI64(BigInt(t.encrypted_msg_time_ms)),
          n.writeFieldEnd()),
        t.decrypted_msg_time_ms != null &&
          (n.writeFieldBegin({
            fname: "decrypted_msg_time_ms",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 6,
          }),
          n.writeI64(BigInt(t.decrypted_msg_time_ms)),
          n.writeFieldEnd()),
        t.process_sdp_crypto_time_ms != null &&
          (n.writeFieldBegin({
            fname: "process_sdp_crypto_time_ms",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 7,
          }),
          n.writeI64(BigInt(t.process_sdp_crypto_time_ms)),
          n.writeFieldEnd()),
        t.create_crypto_offer_time_ms != null &&
          (n.writeFieldBegin({
            fname: "create_crypto_offer_time_ms",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 8,
          }),
          n.writeI64(BigInt(t.create_crypto_offer_time_ms)),
          n.writeFieldEnd()),
        t.create_crypto_answer_time_ms != null &&
          (n.writeFieldBegin({
            fname: "create_crypto_answer_time_ms",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 9,
          }),
          n.writeI64(BigInt(t.create_crypto_answer_time_ms)),
          n.writeFieldEnd()),
        t.get_ik_time_ms != null &&
          (n.writeFieldBegin({
            fname: "get_ik_time_ms",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 10,
          }),
          n.writeI64(BigInt(t.get_ik_time_ms)),
          n.writeFieldEnd()),
        t.peer_id != null &&
          (n.writeFieldBegin({
            fname: "peer_id",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 11,
          }),
          n.writeI64(BigInt(t.peer_id)),
          n.writeFieldEnd()),
        t.peer_connection_index != null &&
          (n.writeFieldBegin({
            fname: "peer_connection_index",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 12,
          }),
          n.writeI64(BigInt(t.peer_connection_index)),
          n.writeFieldEnd()),
        t.srtp_crypto_suite != null &&
          (n.writeFieldBegin({
            fname: "srtp_crypto_suite",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 13,
          }),
          n.writeI64(BigInt(t.srtp_crypto_suite)),
          n.writeFieldEnd()),
        t.engine_error != null &&
          (n.writeFieldBegin({
            fname: "engine_error",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 14,
          }),
          n.writeI64(BigInt(t.engine_error)),
          n.writeFieldEnd()),
        t.libsignal_error != null &&
          (n.writeFieldBegin({
            fname: "libsignal_error",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 15,
          }),
          n.writeI64(BigInt(t.libsignal_error)),
          n.writeFieldEnd()),
        t.identity_key_mode != null &&
          (n.writeFieldBegin({
            fname: "identity_key_mode",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 16,
          }),
          n.writeI64(BigInt(t.identity_key_mode)),
          n.writeFieldEnd()),
        t.identity_key_num_persistent != null &&
          (n.writeFieldBegin({
            fname: "identity_key_num_persistent",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 17,
          }),
          n.writeI64(BigInt(t.identity_key_num_persistent)),
          n.writeFieldEnd()),
        t.identity_key_num_validated != null &&
          (n.writeFieldBegin({
            fname: "identity_key_num_validated",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 18,
          }),
          n.writeI64(BigInt(t.identity_key_num_validated)),
          n.writeFieldEnd()),
        t.identity_key_num_saved != null &&
          (n.writeFieldBegin({
            fname: "identity_key_num_saved",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 19,
          }),
          n.writeI64(BigInt(t.identity_key_num_saved)),
          n.writeFieldEnd()),
        t.identity_key_num_existing != null &&
          (n.writeFieldBegin({
            fname: "identity_key_num_existing",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 20,
          }),
          n.writeI64(BigInt(t.identity_key_num_existing)),
          n.writeFieldEnd()),
        t.is_e2ee_mandated != null &&
          (n.writeFieldBegin({
            fname: "is_e2ee_mandated",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 21,
          }),
          n.writeI64(BigInt(t.is_e2ee_mandated)),
          n.writeFieldEnd()),
        t.local_trace_id != null &&
          (n.writeFieldBegin({
            fname: "local_trace_id",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 22,
          }),
          n.writeI64(BigInt(t.local_trace_id)),
          n.writeFieldEnd()),
        t.remote_trace_id != null &&
          (n.writeFieldBegin({
            fname: "remote_trace_id",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 23,
          }),
          n.writeI64(BigInt(t.remote_trace_id)),
          n.writeFieldEnd()),
        t.local_device_id != null &&
          (n.writeFieldBegin({
            fname: "local_device_id",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 24,
          }),
          n.writeI64(BigInt(t.local_device_id)),
          n.writeFieldEnd()),
        t.remote_device_id != null &&
          (n.writeFieldBegin({
            fname: "remote_device_id",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 25,
          }),
          n.writeI64(BigInt(t.remote_device_id)),
          n.writeFieldEnd()),
        t.events != null)
      ) {
        (n.writeFieldBegin({
          fname: "events",
          ftype: (e || (e = r("ThriftTypes"))).LIST,
          fid: 26,
        }),
          n.writeListBegin({ etype: e.I64, size: t.events.length }));
        for (var o of t.events) n.writeI64(BigInt(o));
        (n.writeListEnd(), n.writeFieldEnd());
      }
      (t.gen_dtls_auth_info_status != null &&
        (n.writeFieldBegin({
          fname: "gen_dtls_auth_info_status",
          ftype: (e || (e = r("ThriftTypes"))).I64,
          fid: 27,
        }),
        n.writeI64(BigInt(t.gen_dtls_auth_info_status)),
        n.writeFieldEnd()),
        t.gen_dtls_auth_info_libsignal_status != null &&
          (n.writeFieldBegin({
            fname: "gen_dtls_auth_info_libsignal_status",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 28,
          }),
          n.writeI64(BigInt(t.gen_dtls_auth_info_libsignal_status)),
          n.writeFieldEnd()),
        t.gen_dtls_auth_info_time_ms != null &&
          (n.writeFieldBegin({
            fname: "gen_dtls_auth_info_time_ms",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 29,
          }),
          n.writeI64(BigInt(t.gen_dtls_auth_info_time_ms)),
          n.writeFieldEnd()),
        t.verify_dtls_auth_info_status != null &&
          (n.writeFieldBegin({
            fname: "verify_dtls_auth_info_status",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 30,
          }),
          n.writeI64(BigInt(t.verify_dtls_auth_info_status)),
          n.writeFieldEnd()),
        t.verify_dtls_auth_info_libsignal_status != null &&
          (n.writeFieldBegin({
            fname: "verify_dtls_auth_info_libsignal_status",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 31,
          }),
          n.writeI64(BigInt(t.verify_dtls_auth_info_libsignal_status)),
          n.writeFieldEnd()),
        t.verify_dtls_auth_info_time_ms != null &&
          (n.writeFieldBegin({
            fname: "verify_dtls_auth_info_time_ms",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 32,
          }),
          n.writeI64(BigInt(t.verify_dtls_auth_info_time_ms)),
          n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function m(t, n) {
      if (
        (n.writeStructBegin("GroupE2eeMetrics"),
        t.received_key_message_counter != null &&
          (n.writeFieldBegin({
            fname: "received_key_message_counter",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 1,
          }),
          n.writeI64(BigInt(t.received_key_message_counter)),
          n.writeFieldEnd()),
        t.sent_key_message_counter != null &&
          (n.writeFieldBegin({
            fname: "sent_key_message_counter",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 2,
          }),
          n.writeI64(BigInt(t.sent_key_message_counter)),
          n.writeFieldEnd()),
        t.cached_key_message_counter != null &&
          (n.writeFieldBegin({
            fname: "cached_key_message_counter",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 3,
          }),
          n.writeI64(BigInt(t.cached_key_message_counter)),
          n.writeFieldEnd()),
        t.used_cached_key_counter != null &&
          (n.writeFieldBegin({
            fname: "used_cached_key_counter",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 4,
          }),
          n.writeI64(BigInt(t.used_cached_key_counter)),
          n.writeFieldEnd()),
        t.unused_smu_counter != null &&
          (n.writeFieldBegin({
            fname: "unused_smu_counter",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 5,
          }),
          n.writeI64(BigInt(t.unused_smu_counter)),
          n.writeFieldEnd()),
        t.missing_key_message_counter != null &&
          (n.writeFieldBegin({
            fname: "missing_key_message_counter",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 6,
          }),
          n.writeI64(BigInt(t.missing_key_message_counter)),
          n.writeFieldEnd()),
        t.negotiate_off_status != null &&
          (n.writeFieldBegin({
            fname: "negotiate_off_status",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 7,
          }),
          n.writeI64(BigInt(t.negotiate_off_status)),
          n.writeFieldEnd()),
        t.cipher_suite_status != null &&
          (n.writeFieldBegin({
            fname: "cipher_suite_status",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 8,
          }),
          n.writeI64(BigInt(t.cipher_suite_status)),
          n.writeFieldEnd()),
        t.decrypt_used_cached_session_counter != null &&
          (n.writeFieldBegin({
            fname: "decrypt_used_cached_session_counter",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 9,
          }),
          n.writeI64(BigInt(t.decrypt_used_cached_session_counter)),
          n.writeFieldEnd()),
        t.encrypt_used_cached_session_counter != null &&
          (n.writeFieldBegin({
            fname: "encrypt_used_cached_session_counter",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 10,
          }),
          n.writeI64(BigInt(t.encrypt_used_cached_session_counter)),
          n.writeFieldEnd()),
        t.sent_ack_message_counter != null &&
          (n.writeFieldBegin({
            fname: "sent_ack_message_counter",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 11,
          }),
          n.writeI64(BigInt(t.sent_ack_message_counter)),
          n.writeFieldEnd()),
        t.reuse_ackd_uid_counter != null &&
          (n.writeFieldBegin({
            fname: "reuse_ackd_uid_counter",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 12,
          }),
          n.writeI64(BigInt(t.reuse_ackd_uid_counter)),
          n.writeFieldEnd()),
        t.total_uids_created_counter != null &&
          (n.writeFieldBegin({
            fname: "total_uids_created_counter",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 13,
          }),
          n.writeI64(BigInt(t.total_uids_created_counter)),
          n.writeFieldEnd()),
        t.generate_chain_key_failed_error != null &&
          (n.writeFieldBegin({
            fname: "generate_chain_key_failed_error",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 14,
          }),
          n.writeI64(BigInt(t.generate_chain_key_failed_error)),
          n.writeFieldEnd()),
        t.set_chain_key_failed_error != null &&
          (n.writeFieldBegin({
            fname: "set_chain_key_failed_error",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 15,
          }),
          n.writeI64(BigInt(t.set_chain_key_failed_error)),
          n.writeFieldEnd()),
        t.key_provider_not_found_error != null &&
          (n.writeFieldBegin({
            fname: "key_provider_not_found_error",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 16,
          }),
          n.writeI64(BigInt(t.key_provider_not_found_error)),
          n.writeFieldEnd()),
        t.key_message_parse_failed_error != null &&
          (n.writeFieldBegin({
            fname: "key_message_parse_failed_error",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 17,
          }),
          n.writeI64(BigInt(t.key_message_parse_failed_error)),
          n.writeFieldEnd()),
        t.empty_pkb_result_error != null &&
          (n.writeFieldBegin({
            fname: "empty_pkb_result_error",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 18,
          }),
          n.writeI64(BigInt(t.empty_pkb_result_error)),
          n.writeFieldEnd()),
        t.empty_encrypt_result_error != null &&
          (n.writeFieldBegin({
            fname: "empty_encrypt_result_error",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 19,
          }),
          n.writeI64(BigInt(t.empty_encrypt_result_error)),
          n.writeFieldEnd()),
        t.empty_decrypt_result_error != null &&
          (n.writeFieldBegin({
            fname: "empty_decrypt_result_error",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 20,
          }),
          n.writeI64(BigInt(t.empty_decrypt_result_error)),
          n.writeFieldEnd()),
        t.empty_version_error != null &&
          (n.writeFieldBegin({
            fname: "empty_version_error",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 21,
          }),
          n.writeI64(BigInt(t.empty_version_error)),
          n.writeFieldEnd()),
        t.unsupported_version_error != null &&
          (n.writeFieldBegin({
            fname: "unsupported_version_error",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 22,
          }),
          n.writeI64(BigInt(t.unsupported_version_error)),
          n.writeFieldEnd()),
        t.midcall_version_change_error != null &&
          (n.writeFieldBegin({
            fname: "midcall_version_change_error",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 23,
          }),
          n.writeI64(BigInt(t.midcall_version_change_error)),
          n.writeFieldEnd()),
        t.inconsistent_remote_maps_error != null &&
          (n.writeFieldBegin({
            fname: "inconsistent_remote_maps_error",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 24,
          }),
          n.writeI64(BigInt(t.inconsistent_remote_maps_error)),
          n.writeFieldEnd()),
        t.key_message_pkb_mismatch_error != null &&
          (n.writeFieldBegin({
            fname: "key_message_pkb_mismatch_error",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 25,
          }),
          n.writeI64(BigInt(t.key_message_pkb_mismatch_error)),
          n.writeFieldEnd()),
        t.no_key_or_ack_in_e2ee_message_error != null &&
          (n.writeFieldBegin({
            fname: "no_key_or_ack_in_e2ee_message_error",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 26,
          }),
          n.writeI64(BigInt(t.no_key_or_ack_in_e2ee_message_error)),
          n.writeFieldEnd()),
        t.receiver_key_provider_not_found_error != null &&
          (n.writeFieldBegin({
            fname: "receiver_key_provider_not_found_error",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 27,
          }),
          n.writeI64(BigInt(t.receiver_key_provider_not_found_error)),
          n.writeFieldEnd()),
        t.pkb_parse_failed_error != null &&
          (n.writeFieldBegin({
            fname: "pkb_parse_failed_error",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 28,
          }),
          n.writeI64(BigInt(t.pkb_parse_failed_error)),
          n.writeFieldEnd()),
        t.message_deserialized_failed_error != null &&
          (n.writeFieldBegin({
            fname: "message_deserialized_failed_error",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 29,
          }),
          n.writeI64(BigInt(t.message_deserialized_failed_error)),
          n.writeFieldEnd()),
        t.decrypt_no_identity_key_and_cached_session_not_used_error != null &&
          (n.writeFieldBegin({
            fname: "decrypt_no_identity_key_and_cached_session_not_used_error",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 30,
          }),
          n.writeI64(
            BigInt(t.decrypt_no_identity_key_and_cached_session_not_used_error),
          ),
          n.writeFieldEnd()),
        t.encrypt_no_identity_key_and_cached_session_not_used_error != null &&
          (n.writeFieldBegin({
            fname: "encrypt_no_identity_key_and_cached_session_not_used_error",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 31,
          }),
          n.writeI64(
            BigInt(t.encrypt_no_identity_key_and_cached_session_not_used_error),
          ),
          n.writeFieldEnd()),
        t.decrypt_ack_wrong_message_error != null &&
          (n.writeFieldBegin({
            fname: "decrypt_ack_wrong_message_error",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 32,
          }),
          n.writeI64(BigInt(t.decrypt_ack_wrong_message_error)),
          n.writeFieldEnd()),
        t.invalid_uid_received_error != null &&
          (n.writeFieldBegin({
            fname: "invalid_uid_received_error",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 33,
          }),
          n.writeI64(BigInt(t.invalid_uid_received_error)),
          n.writeFieldEnd()),
        t.ack_for_absent_user != null &&
          (n.writeFieldBegin({
            fname: "ack_for_absent_user",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 34,
          }),
          n.writeI64(BigInt(t.ack_for_absent_user)),
          n.writeFieldEnd()),
        t.uid_not_awaiting_ack_error != null &&
          (n.writeFieldBegin({
            fname: "uid_not_awaiting_ack_error",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 35,
          }),
          n.writeI64(BigInt(t.uid_not_awaiting_ack_error)),
          n.writeFieldEnd()),
        t.decrypt_ack_error != null &&
          (n.writeFieldBegin({
            fname: "decrypt_ack_error",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 36,
          }),
          n.writeI64(BigInt(t.decrypt_ack_error)),
          n.writeFieldEnd()),
        t.empty_decrypt_result_ack_error != null &&
          (n.writeFieldBegin({
            fname: "empty_decrypt_result_ack_error",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 37,
          }),
          n.writeI64(BigInt(t.empty_decrypt_result_ack_error)),
          n.writeFieldEnd()),
        t.decrypt_ack_cached_session_not_used_error != null &&
          (n.writeFieldBegin({
            fname: "decrypt_ack_cached_session_not_used_error",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 38,
          }),
          n.writeI64(BigInt(t.decrypt_ack_cached_session_not_used_error)),
          n.writeFieldEnd()),
        t.encrypt_ack_error != null &&
          (n.writeFieldBegin({
            fname: "encrypt_ack_error",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 39,
          }),
          n.writeI64(BigInt(t.encrypt_ack_error)),
          n.writeFieldEnd()),
        t.empty_encrypt_result_ack_error != null &&
          (n.writeFieldBegin({
            fname: "empty_encrypt_result_ack_error",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 40,
          }),
          n.writeI64(BigInt(t.empty_encrypt_result_ack_error)),
          n.writeFieldEnd()),
        t.invalid_message_type_error != null &&
          (n.writeFieldBegin({
            fname: "invalid_message_type_error",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 41,
          }),
          n.writeI64(BigInt(t.invalid_message_type_error)),
          n.writeFieldEnd()),
        t.server_state_deserialized_failed_error != null &&
          (n.writeFieldBegin({
            fname: "server_state_deserialized_failed_error",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 42,
          }),
          n.writeI64(BigInt(t.server_state_deserialized_failed_error)),
          n.writeFieldEnd()),
        t.crypto_engine_failure_error != null &&
          (n.writeFieldBegin({
            fname: "crypto_engine_failure_error",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 43,
          }),
          n.writeI64(BigInt(t.crypto_engine_failure_error)),
          n.writeFieldEnd()),
        t.empty_e2ee_client_state_error != null &&
          (n.writeFieldBegin({
            fname: "empty_e2ee_client_state_error",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 44,
          }),
          n.writeI64(BigInt(t.empty_e2ee_client_state_error)),
          n.writeFieldEnd()),
        t.group_e2ee_negotiated != null &&
          (n.writeFieldBegin({
            fname: "group_e2ee_negotiated",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 45,
          }),
          n.writeI64(BigInt(t.group_e2ee_negotiated)),
          n.writeFieldEnd()),
        t.negotiation_mode_kn != null &&
          (n.writeFieldBegin({
            fname: "negotiation_mode_kn",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 46,
          }),
          n.writeI64(BigInt(t.negotiation_mode_kn)),
          n.writeFieldEnd()),
        t.group_e2ee_setup_status != null &&
          (n.writeFieldBegin({
            fname: "group_e2ee_setup_status",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 47,
          }),
          n.writeI64(BigInt(t.group_e2ee_setup_status)),
          n.writeFieldEnd()),
        t.enable_group_e2ee != null &&
          (n.writeFieldBegin({
            fname: "enable_group_e2ee",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 48,
          }),
          n.writeI64(BigInt(t.enable_group_e2ee)),
          n.writeFieldEnd()),
        t.identity_key_mode_group != null &&
          (n.writeFieldBegin({
            fname: "identity_key_mode_group",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 49,
          }),
          n.writeI64(BigInt(t.identity_key_mode_group)),
          n.writeFieldEnd()),
        t.identity_key_num_persistent_group != null &&
          (n.writeFieldBegin({
            fname: "identity_key_num_persistent_group",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 50,
          }),
          n.writeI64(BigInt(t.identity_key_num_persistent_group)),
          n.writeFieldEnd()),
        t.identity_key_num_validated_group != null &&
          (n.writeFieldBegin({
            fname: "identity_key_num_validated_group",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 51,
          }),
          n.writeI64(BigInt(t.identity_key_num_validated_group)),
          n.writeFieldEnd()),
        t.identity_key_num_saved_group != null &&
          (n.writeFieldBegin({
            fname: "identity_key_num_saved_group",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 52,
          }),
          n.writeI64(BigInt(t.identity_key_num_saved_group)),
          n.writeFieldEnd()),
        t.identity_key_num_existing_group != null &&
          (n.writeFieldBegin({
            fname: "identity_key_num_existing_group",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 53,
          }),
          n.writeI64(BigInt(t.identity_key_num_existing_group)),
          n.writeFieldEnd()),
        t.max_key_message_latency_ms != null &&
          (n.writeFieldBegin({
            fname: "max_key_message_latency_ms",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 54,
          }),
          n.writeI64(BigInt(t.max_key_message_latency_ms)),
          n.writeFieldEnd()),
        t.max_key_message_latency_ms_joiner != null &&
          (n.writeFieldBegin({
            fname: "max_key_message_latency_ms_joiner",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 55,
          }),
          n.writeI64(BigInt(t.max_key_message_latency_ms_joiner)),
          n.writeFieldEnd()),
        t.max_smu_to_key_message_latency_ms != null &&
          (n.writeFieldBegin({
            fname: "max_smu_to_key_message_latency_ms",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 56,
          }),
          n.writeI64(BigInt(t.max_smu_to_key_message_latency_ms)),
          n.writeFieldEnd()),
        t.process_smu_time_ms != null &&
          (n.writeFieldBegin({
            fname: "process_smu_time_ms",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 57,
          }),
          n.writeI64(BigInt(t.process_smu_time_ms)),
          n.writeFieldEnd()),
        t.decryption_total_frames != null &&
          (n.writeFieldBegin({
            fname: "decryption_total_frames",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 58,
          }),
          n.writeI64(BigInt(t.decryption_total_frames)),
          n.writeFieldEnd()),
        t.decryption_total_error_frames != null &&
          (n.writeFieldBegin({
            fname: "decryption_total_error_frames",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 59,
          }),
          n.writeI64(BigInt(t.decryption_total_error_frames)),
          n.writeFieldEnd()),
        t.decryption_error_frames_alloc != null &&
          (n.writeFieldBegin({
            fname: "decryption_error_frames_alloc",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 60,
          }),
          n.writeI64(BigInt(t.decryption_error_frames_alloc)),
          n.writeFieldEnd()),
        t.decryption_error_frames_invalid_params != null &&
          (n.writeFieldBegin({
            fname: "decryption_error_frames_invalid_params",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 61,
          }),
          n.writeI64(BigInt(t.decryption_error_frames_invalid_params)),
          n.writeFieldEnd()),
        t.decryption_error_frames_cipher != null &&
          (n.writeFieldBegin({
            fname: "decryption_error_frames_cipher",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 62,
          }),
          n.writeI64(BigInt(t.decryption_error_frames_cipher)),
          n.writeFieldEnd()),
        t.decryption_error_frames_parse != null &&
          (n.writeFieldBegin({
            fname: "decryption_error_frames_parse",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 63,
          }),
          n.writeI64(BigInt(t.decryption_error_frames_parse)),
          n.writeFieldEnd()),
        t.decryption_error_frames_invalid_key != null &&
          (n.writeFieldBegin({
            fname: "decryption_error_frames_invalid_key",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 64,
          }),
          n.writeI64(BigInt(t.decryption_error_frames_invalid_key)),
          n.writeFieldEnd()),
        t.decryption_error_frames_missing_key != null &&
          (n.writeFieldBegin({
            fname: "decryption_error_frames_missing_key",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 65,
          }),
          n.writeI64(BigInt(t.decryption_error_frames_missing_key)),
          n.writeFieldEnd()),
        t.decryption_error_frames_out_of_ratchet_space != null &&
          (n.writeFieldBegin({
            fname: "decryption_error_frames_out_of_ratchet_space",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 66,
          }),
          n.writeI64(BigInt(t.decryption_error_frames_out_of_ratchet_space)),
          n.writeFieldEnd()),
        t.decryption_error_frames_cipher_auth != null &&
          (n.writeFieldBegin({
            fname: "decryption_error_frames_cipher_auth",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 67,
          }),
          n.writeI64(BigInt(t.decryption_error_frames_cipher_auth)),
          n.writeFieldEnd()),
        t.decryption_error_frames_frame_too_old != null &&
          (n.writeFieldBegin({
            fname: "decryption_error_frames_frame_too_old",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 68,
          }),
          n.writeI64(BigInt(t.decryption_error_frames_frame_too_old)),
          n.writeFieldEnd()),
        t.decryption_error_frames_seen_frame != null &&
          (n.writeFieldBegin({
            fname: "decryption_error_frames_seen_frame",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 69,
          }),
          n.writeI64(BigInt(t.decryption_error_frames_seen_frame)),
          n.writeFieldEnd()),
        t.decryption_error_frames_invalid_frame != null &&
          (n.writeFieldBegin({
            fname: "decryption_error_frames_invalid_frame",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 70,
          }),
          n.writeI64(BigInt(t.decryption_error_frames_invalid_frame)),
          n.writeFieldEnd()),
        t.decryption_error_frames_setting_invalid_key != null &&
          (n.writeFieldBegin({
            fname: "decryption_error_frames_setting_invalid_key",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 71,
          }),
          n.writeI64(BigInt(t.decryption_error_frames_setting_invalid_key)),
          n.writeFieldEnd()),
        t.decryption_error_frames_setting_existing_key != null &&
          (n.writeFieldBegin({
            fname: "decryption_error_frames_setting_existing_key",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 72,
          }),
          n.writeI64(BigInt(t.decryption_error_frames_setting_existing_key)),
          n.writeFieldEnd()),
        t.decryption_error_frames_escape_data != null &&
          (n.writeFieldBegin({
            fname: "decryption_error_frames_escape_data",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 73,
          }),
          n.writeI64(BigInt(t.decryption_error_frames_escape_data)),
          n.writeFieldEnd()),
        t.decryption_error_frames_deescape_data != null &&
          (n.writeFieldBegin({
            fname: "decryption_error_frames_deescape_data",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 74,
          }),
          n.writeI64(BigInt(t.decryption_error_frames_deescape_data)),
          n.writeFieldEnd()),
        t.decryption_error_frames_parse_frame_or_key != null &&
          (n.writeFieldBegin({
            fname: "decryption_error_frames_parse_frame_or_key",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 75,
          }),
          n.writeI64(BigInt(t.decryption_error_frames_parse_frame_or_key)),
          n.writeFieldEnd()),
        t.decryption_error_frames_unknown != null &&
          (n.writeFieldBegin({
            fname: "decryption_error_frames_unknown",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 76,
          }),
          n.writeI64(BigInt(t.decryption_error_frames_unknown)),
          n.writeFieldEnd()),
        t.decryption_unencrypted_frames != null &&
          (n.writeFieldBegin({
            fname: "decryption_unencrypted_frames",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 77,
          }),
          n.writeI64(BigInt(t.decryption_unencrypted_frames)),
          n.writeFieldEnd()),
        t.encryption_total_frames != null &&
          (n.writeFieldBegin({
            fname: "encryption_total_frames",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 78,
          }),
          n.writeI64(BigInt(t.encryption_total_frames)),
          n.writeFieldEnd()),
        t.encryption_error_frames != null &&
          (n.writeFieldBegin({
            fname: "encryption_error_frames",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 79,
          }),
          n.writeI64(BigInt(t.encryption_error_frames)),
          n.writeFieldEnd()),
        t.encryption_escape_bytes != null &&
          (n.writeFieldBegin({
            fname: "encryption_escape_bytes",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 80,
          }),
          n.writeI64(BigInt(t.encryption_escape_bytes)),
          n.writeFieldEnd()),
        t.encryption_total_error_frames != null &&
          (n.writeFieldBegin({
            fname: "encryption_total_error_frames",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 81,
          }),
          n.writeI64(BigInt(t.encryption_total_error_frames)),
          n.writeFieldEnd()),
        t.encryption_error_frames_alloc != null &&
          (n.writeFieldBegin({
            fname: "encryption_error_frames_alloc",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 82,
          }),
          n.writeI64(BigInt(t.encryption_error_frames_alloc)),
          n.writeFieldEnd()),
        t.encryption_error_frames_invalid_params != null &&
          (n.writeFieldBegin({
            fname: "encryption_error_frames_invalid_params",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 83,
          }),
          n.writeI64(BigInt(t.encryption_error_frames_invalid_params)),
          n.writeFieldEnd()),
        t.encryption_error_frames_cipher != null &&
          (n.writeFieldBegin({
            fname: "encryption_error_frames_cipher",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 84,
          }),
          n.writeI64(BigInt(t.encryption_error_frames_cipher)),
          n.writeFieldEnd()),
        t.encryption_error_frames_parse != null &&
          (n.writeFieldBegin({
            fname: "encryption_error_frames_parse",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 85,
          }),
          n.writeI64(BigInt(t.encryption_error_frames_parse)),
          n.writeFieldEnd()),
        t.encryption_error_frames_invalid_key != null &&
          (n.writeFieldBegin({
            fname: "encryption_error_frames_invalid_key",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 86,
          }),
          n.writeI64(BigInt(t.encryption_error_frames_invalid_key)),
          n.writeFieldEnd()),
        t.encryption_error_frames_cipher_auth != null &&
          (n.writeFieldBegin({
            fname: "encryption_error_frames_cipher_auth",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 87,
          }),
          n.writeI64(BigInt(t.encryption_error_frames_cipher_auth)),
          n.writeFieldEnd()),
        t.encryption_error_frames_escape_data != null &&
          (n.writeFieldBegin({
            fname: "encryption_error_frames_escape_data",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 88,
          }),
          n.writeI64(BigInt(t.encryption_error_frames_escape_data)),
          n.writeFieldEnd()),
        t.encryption_error_frames_unsupported_codec != null &&
          (n.writeFieldBegin({
            fname: "encryption_error_frames_unsupported_codec",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 89,
          }),
          n.writeI64(BigInt(t.encryption_error_frames_unsupported_codec)),
          n.writeFieldEnd()),
        t.encryption_error_frames_unknown != null &&
          (n.writeFieldBegin({
            fname: "encryption_error_frames_unknown",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 90,
          }),
          n.writeI64(BigInt(t.encryption_error_frames_unknown)),
          n.writeFieldEnd()),
        t.decryption_total_frames_data_channel != null &&
          (n.writeFieldBegin({
            fname: "decryption_total_frames_data_channel",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 91,
          }),
          n.writeI64(BigInt(t.decryption_total_frames_data_channel)),
          n.writeFieldEnd()),
        t.decryption_total_error_frames_data_channel != null &&
          (n.writeFieldBegin({
            fname: "decryption_total_error_frames_data_channel",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 92,
          }),
          n.writeI64(BigInt(t.decryption_total_error_frames_data_channel)),
          n.writeFieldEnd()),
        t.decryption_error_frames_data_channel_alloc != null &&
          (n.writeFieldBegin({
            fname: "decryption_error_frames_data_channel_alloc",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 93,
          }),
          n.writeI64(BigInt(t.decryption_error_frames_data_channel_alloc)),
          n.writeFieldEnd()),
        t.decryption_error_frames_data_channel_invalid_params != null &&
          (n.writeFieldBegin({
            fname: "decryption_error_frames_data_channel_invalid_params",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 94,
          }),
          n.writeI64(
            BigInt(t.decryption_error_frames_data_channel_invalid_params),
          ),
          n.writeFieldEnd()),
        t.decryption_error_frames_data_channel_cipher != null &&
          (n.writeFieldBegin({
            fname: "decryption_error_frames_data_channel_cipher",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 95,
          }),
          n.writeI64(BigInt(t.decryption_error_frames_data_channel_cipher)),
          n.writeFieldEnd()),
        t.decryption_error_frames_data_channel_parse != null &&
          (n.writeFieldBegin({
            fname: "decryption_error_frames_data_channel_parse",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 96,
          }),
          n.writeI64(BigInt(t.decryption_error_frames_data_channel_parse)),
          n.writeFieldEnd()),
        t.decryption_error_frames_data_channel_invalid_key != null &&
          (n.writeFieldBegin({
            fname: "decryption_error_frames_data_channel_invalid_key",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 97,
          }),
          n.writeI64(
            BigInt(t.decryption_error_frames_data_channel_invalid_key),
          ),
          n.writeFieldEnd()),
        t.decryption_error_frames_data_channel_missing_key != null &&
          (n.writeFieldBegin({
            fname: "decryption_error_frames_data_channel_missing_key",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 98,
          }),
          n.writeI64(
            BigInt(t.decryption_error_frames_data_channel_missing_key),
          ),
          n.writeFieldEnd()),
        t.decryption_error_frames_data_channel_out_of_ratchet_space != null &&
          (n.writeFieldBegin({
            fname: "decryption_error_frames_data_channel_out_of_ratchet_space",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 99,
          }),
          n.writeI64(
            BigInt(t.decryption_error_frames_data_channel_out_of_ratchet_space),
          ),
          n.writeFieldEnd()),
        t.decryption_error_frames_data_channel_cipher_auth != null &&
          (n.writeFieldBegin({
            fname: "decryption_error_frames_data_channel_cipher_auth",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 100,
          }),
          n.writeI64(
            BigInt(t.decryption_error_frames_data_channel_cipher_auth),
          ),
          n.writeFieldEnd()),
        t.decryption_error_frames_data_channel_frame_too_old != null &&
          (n.writeFieldBegin({
            fname: "decryption_error_frames_data_channel_frame_too_old",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 101,
          }),
          n.writeI64(
            BigInt(t.decryption_error_frames_data_channel_frame_too_old),
          ),
          n.writeFieldEnd()),
        t.decryption_error_frames_data_channel_seen_frame != null &&
          (n.writeFieldBegin({
            fname: "decryption_error_frames_data_channel_seen_frame",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 102,
          }),
          n.writeI64(BigInt(t.decryption_error_frames_data_channel_seen_frame)),
          n.writeFieldEnd()),
        t.decryption_error_frames_data_channel_invalid_frame != null &&
          (n.writeFieldBegin({
            fname: "decryption_error_frames_data_channel_invalid_frame",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 103,
          }),
          n.writeI64(
            BigInt(t.decryption_error_frames_data_channel_invalid_frame),
          ),
          n.writeFieldEnd()),
        t.decryption_error_frames_data_channel_setting_invalid_key != null &&
          (n.writeFieldBegin({
            fname: "decryption_error_frames_data_channel_setting_invalid_key",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 104,
          }),
          n.writeI64(
            BigInt(t.decryption_error_frames_data_channel_setting_invalid_key),
          ),
          n.writeFieldEnd()),
        t.decryption_error_frames_data_channel_setting_existing_key != null &&
          (n.writeFieldBegin({
            fname: "decryption_error_frames_data_channel_setting_existing_key",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 105,
          }),
          n.writeI64(
            BigInt(t.decryption_error_frames_data_channel_setting_existing_key),
          ),
          n.writeFieldEnd()),
        t.decryption_error_frames_data_channel_escape_data != null &&
          (n.writeFieldBegin({
            fname: "decryption_error_frames_data_channel_escape_data",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 106,
          }),
          n.writeI64(
            BigInt(t.decryption_error_frames_data_channel_escape_data),
          ),
          n.writeFieldEnd()),
        t.decryption_error_frames_data_channel_deescape_data != null &&
          (n.writeFieldBegin({
            fname: "decryption_error_frames_data_channel_deescape_data",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 107,
          }),
          n.writeI64(
            BigInt(t.decryption_error_frames_data_channel_deescape_data),
          ),
          n.writeFieldEnd()),
        t.decryption_error_frames_data_channel_parse_frame_or_key != null &&
          (n.writeFieldBegin({
            fname: "decryption_error_frames_data_channel_parse_frame_or_key",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 108,
          }),
          n.writeI64(
            BigInt(t.decryption_error_frames_data_channel_parse_frame_or_key),
          ),
          n.writeFieldEnd()),
        t.decryption_error_frames_data_channel_unknown != null &&
          (n.writeFieldBegin({
            fname: "decryption_error_frames_data_channel_unknown",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 109,
          }),
          n.writeI64(BigInt(t.decryption_error_frames_data_channel_unknown)),
          n.writeFieldEnd()),
        t.decryption_unencrypted_frames_data_channel != null &&
          (n.writeFieldBegin({
            fname: "decryption_unencrypted_frames_data_channel",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 110,
          }),
          n.writeI64(BigInt(t.decryption_unencrypted_frames_data_channel)),
          n.writeFieldEnd()),
        t.encryption_total_frames_data_channel != null &&
          (n.writeFieldBegin({
            fname: "encryption_total_frames_data_channel",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 111,
          }),
          n.writeI64(BigInt(t.encryption_total_frames_data_channel)),
          n.writeFieldEnd()),
        t.encryption_error_frames_data_channel != null &&
          (n.writeFieldBegin({
            fname: "encryption_error_frames_data_channel",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 112,
          }),
          n.writeI64(BigInt(t.encryption_error_frames_data_channel)),
          n.writeFieldEnd()),
        t.encryption_total_error_frames_data_channel != null &&
          (n.writeFieldBegin({
            fname: "encryption_total_error_frames_data_channel",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 113,
          }),
          n.writeI64(BigInt(t.encryption_total_error_frames_data_channel)),
          n.writeFieldEnd()),
        t.encryption_error_frames_data_channel_alloc != null &&
          (n.writeFieldBegin({
            fname: "encryption_error_frames_data_channel_alloc",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 114,
          }),
          n.writeI64(BigInt(t.encryption_error_frames_data_channel_alloc)),
          n.writeFieldEnd()),
        t.encryption_error_frames_data_channel_invalid_params != null &&
          (n.writeFieldBegin({
            fname: "encryption_error_frames_data_channel_invalid_params",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 115,
          }),
          n.writeI64(
            BigInt(t.encryption_error_frames_data_channel_invalid_params),
          ),
          n.writeFieldEnd()),
        t.encryption_error_frames_data_channel_cipher != null &&
          (n.writeFieldBegin({
            fname: "encryption_error_frames_data_channel_cipher",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 116,
          }),
          n.writeI64(BigInt(t.encryption_error_frames_data_channel_cipher)),
          n.writeFieldEnd()),
        t.encryption_error_frames_data_channel_parse != null &&
          (n.writeFieldBegin({
            fname: "encryption_error_frames_data_channel_parse",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 117,
          }),
          n.writeI64(BigInt(t.encryption_error_frames_data_channel_parse)),
          n.writeFieldEnd()),
        t.encryption_error_frames_data_channel_invalid_key != null &&
          (n.writeFieldBegin({
            fname: "encryption_error_frames_data_channel_invalid_key",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 118,
          }),
          n.writeI64(
            BigInt(t.encryption_error_frames_data_channel_invalid_key),
          ),
          n.writeFieldEnd()),
        t.encryption_error_frames_data_channel_cipher_auth != null &&
          (n.writeFieldBegin({
            fname: "encryption_error_frames_data_channel_cipher_auth",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 119,
          }),
          n.writeI64(
            BigInt(t.encryption_error_frames_data_channel_cipher_auth),
          ),
          n.writeFieldEnd()),
        t.encryption_error_frames_data_channel_escape_data != null &&
          (n.writeFieldBegin({
            fname: "encryption_error_frames_data_channel_escape_data",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 120,
          }),
          n.writeI64(
            BigInt(t.encryption_error_frames_data_channel_escape_data),
          ),
          n.writeFieldEnd()),
        t.encryption_error_frames_data_channel_unsupported_codec != null &&
          (n.writeFieldBegin({
            fname: "encryption_error_frames_data_channel_unsupported_codec",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 121,
          }),
          n.writeI64(
            BigInt(t.encryption_error_frames_data_channel_unsupported_codec),
          ),
          n.writeFieldEnd()),
        t.encryption_error_frames_data_channel_unknown != null &&
          (n.writeFieldBegin({
            fname: "encryption_error_frames_data_channel_unknown",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 122,
          }),
          n.writeI64(BigInt(t.encryption_error_frames_data_channel_unknown)),
          n.writeFieldEnd()),
        t.num_removed_data_decryptors != null &&
          (n.writeFieldBegin({
            fname: "num_removed_data_decryptors",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 123,
          }),
          n.writeI64(BigInt(t.num_removed_data_decryptors)),
          n.writeFieldEnd()),
        t.num_frame_decryptor_with_unencrypted_data != null &&
          (n.writeFieldBegin({
            fname: "num_frame_decryptor_with_unencrypted_data",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 124,
          }),
          n.writeI64(BigInt(t.num_frame_decryptor_with_unencrypted_data)),
          n.writeFieldEnd()),
        t.num_removed_decryptors != null &&
          (n.writeFieldBegin({
            fname: "num_removed_decryptors",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 125,
          }),
          n.writeI64(BigInt(t.num_removed_decryptors)),
          n.writeFieldEnd()),
        t.data_channel_encryption_not_ready_in_mandated_calls_error != null &&
          (n.writeFieldBegin({
            fname: "data_channel_encryption_not_ready_in_mandated_calls_error",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 126,
          }),
          n.writeI64(
            BigInt(t.data_channel_encryption_not_ready_in_mandated_calls_error),
          ),
          n.writeFieldEnd()),
        t.num_e2ee_message_total_encrypt != null &&
          (n.writeFieldBegin({
            fname: "num_e2ee_message_total_encrypt",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 127,
          }),
          n.writeI64(BigInt(t.num_e2ee_message_total_encrypt)),
          n.writeFieldEnd()),
        t.num_e2ee_message_error_encrypt != null &&
          (n.writeFieldBegin({
            fname: "num_e2ee_message_error_encrypt",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 128,
          }),
          n.writeI64(BigInt(t.num_e2ee_message_error_encrypt)),
          n.writeFieldEnd()),
        t.num_e2ee_message_total_decrypt != null &&
          (n.writeFieldBegin({
            fname: "num_e2ee_message_total_decrypt",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 129,
          }),
          n.writeI64(BigInt(t.num_e2ee_message_total_decrypt)),
          n.writeFieldEnd()),
        t.num_e2ee_message_error_decrypt != null &&
          (n.writeFieldBegin({
            fname: "num_e2ee_message_error_decrypt",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 130,
          }),
          n.writeI64(BigInt(t.num_e2ee_message_error_decrypt)),
          n.writeFieldEnd()),
        t.negotiate_off_time != null &&
          (n.writeFieldBegin({
            fname: "negotiate_off_time",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 131,
          }),
          n.writeI64(BigInt(t.negotiate_off_time)),
          n.writeFieldEnd()),
        t.negotiated_version != null &&
          (n.writeFieldBegin({
            fname: "negotiated_version",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 132,
          }),
          n.writeI64(BigInt(t.negotiated_version)),
          n.writeFieldEnd()),
        t.decryptor_removed_time != null &&
          (n.writeFieldBegin({
            fname: "decryptor_removed_time",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 133,
          }),
          n.writeI64(BigInt(t.decryptor_removed_time)),
          n.writeFieldEnd()),
        t.is_e2ee_mandated_group != null &&
          (n.writeFieldBegin({
            fname: "is_e2ee_mandated_group",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 134,
          }),
          n.writeI64(BigInt(t.is_e2ee_mandated_group)),
          n.writeFieldEnd()),
        t.events != null)
      ) {
        (n.writeFieldBegin({
          fname: "events",
          ftype: (e || (e = r("ThriftTypes"))).LIST,
          fid: 135,
        }),
          n.writeListBegin({ etype: e.I64, size: t.events.length }));
        for (var o of t.events) n.writeI64(BigInt(o));
        (n.writeListEnd(), n.writeFieldEnd());
      }
      (t.num_e2ee_message_received != null &&
        (n.writeFieldBegin({
          fname: "num_e2ee_message_received",
          ftype: (e || (e = r("ThriftTypes"))).I64,
          fid: 136,
        }),
        n.writeI64(BigInt(t.num_e2ee_message_received)),
        n.writeFieldEnd()),
        t.num_e2ee_message_error_decrypt_non_e2ee_received != null &&
          (n.writeFieldBegin({
            fname: "num_e2ee_message_error_decrypt_non_e2ee_received",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 137,
          }),
          n.writeI64(
            BigInt(t.num_e2ee_message_error_decrypt_non_e2ee_received),
          ),
          n.writeFieldEnd()),
        t.num_e2ee_message_error_decrypt_missing_sender != null &&
          (n.writeFieldBegin({
            fname: "num_e2ee_message_error_decrypt_missing_sender",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 138,
          }),
          n.writeI64(BigInt(t.num_e2ee_message_error_decrypt_missing_sender)),
          n.writeFieldEnd()),
        t.num_e2ee_message_error_decrypt_exceeding_retry != null &&
          (n.writeFieldBegin({
            fname: "num_e2ee_message_error_decrypt_exceeding_retry",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 139,
          }),
          n.writeI64(BigInt(t.num_e2ee_message_error_decrypt_exceeding_retry)),
          n.writeFieldEnd()),
        t.max_media_channel_key_message_retry_count != null &&
          (n.writeFieldBegin({
            fname: "max_media_channel_key_message_retry_count",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 140,
          }),
          n.writeI64(BigInt(t.max_media_channel_key_message_retry_count)),
          n.writeFieldEnd()),
        t.g_e2ee_total_count_of_extra_decryptions != null &&
          (n.writeFieldBegin({
            fname: "g_e2ee_total_count_of_extra_decryptions",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 141,
          }),
          n.writeI64(BigInt(t.g_e2ee_total_count_of_extra_decryptions)),
          n.writeFieldEnd()),
        t.g_e2ee_total_count_of_extra_decryptions_failures != null &&
          (n.writeFieldBegin({
            fname: "g_e2ee_total_count_of_extra_decryptions_failures",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 142,
          }),
          n.writeI64(
            BigInt(t.g_e2ee_total_count_of_extra_decryptions_failures),
          ),
          n.writeFieldEnd()),
        t.g_e2ee_total_count_of_extra_decryptions_failures_due_to_missing_key !=
          null &&
          (n.writeFieldBegin({
            fname:
              "g_e2ee_total_count_of_extra_decryptions_failures_due_to_missing_key",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 143,
          }),
          n.writeI64(
            BigInt(
              t.g_e2ee_total_count_of_extra_decryptions_failures_due_to_missing_key,
            ),
          ),
          n.writeFieldEnd()),
        t.g_e2ee_decryption_error_frames_empty_supported_codes != null &&
          (n.writeFieldBegin({
            fname: "g_e2ee_decryption_error_frames_empty_supported_codes",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 144,
          }),
          n.writeI64(
            BigInt(t.g_e2ee_decryption_error_frames_empty_supported_codes),
          ),
          n.writeFieldEnd()),
        t.g_e2ee_encryption_error_frames_empty != null &&
          (n.writeFieldBegin({
            fname: "g_e2ee_encryption_error_frames_empty",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 146,
          }),
          n.writeI64(BigInt(t.g_e2ee_encryption_error_frames_empty)),
          n.writeFieldEnd()),
        t.g_e2ee_encryption_error_frames_empty_nalu_blocks != null &&
          (n.writeFieldBegin({
            fname: "g_e2ee_encryption_error_frames_empty_nalu_blocks",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 147,
          }),
          n.writeI64(
            BigInt(t.g_e2ee_encryption_error_frames_empty_nalu_blocks),
          ),
          n.writeFieldEnd()),
        t.g_e2ee_encryption_error_frames_invalid_h264 != null &&
          (n.writeFieldBegin({
            fname: "g_e2ee_encryption_error_frames_invalid_h264",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 148,
          }),
          n.writeI64(BigInt(t.g_e2ee_encryption_error_frames_invalid_h264)),
          n.writeFieldEnd()),
        t.g_e2ee_encryption_error_frames_invalid_h265 != null &&
          (n.writeFieldBegin({
            fname: "g_e2ee_encryption_error_frames_invalid_h265",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 149,
          }),
          n.writeI64(BigInt(t.g_e2ee_encryption_error_frames_invalid_h265)),
          n.writeFieldEnd()),
        t.g_e2ee_encryption_error_frames_invalid_h265_nalu_block != null &&
          (n.writeFieldBegin({
            fname: "g_e2ee_encryption_error_frames_invalid_h265_nalu_block",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 150,
          }),
          n.writeI64(
            BigInt(t.g_e2ee_encryption_error_frames_invalid_h265_nalu_block),
          ),
          n.writeFieldEnd()),
        t.g_e2ee_total_count_of_extra_encryptions != null &&
          (n.writeFieldBegin({
            fname: "g_e2ee_total_count_of_extra_encryptions",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 151,
          }),
          n.writeI64(BigInt(t.g_e2ee_total_count_of_extra_encryptions)),
          n.writeFieldEnd()),
        t.g_e2ee_total_count_of_extra_encryptions_failures != null &&
          (n.writeFieldBegin({
            fname: "g_e2ee_total_count_of_extra_encryptions_failures",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 152,
          }),
          n.writeI64(
            BigInt(t.g_e2ee_total_count_of_extra_encryptions_failures),
          ),
          n.writeFieldEnd()),
        t.encryption_error_frames_no_active_key != null &&
          (n.writeFieldBegin({
            fname: "encryption_error_frames_no_active_key",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 153,
          }),
          n.writeI64(BigInt(t.encryption_error_frames_no_active_key)),
          n.writeFieldEnd()),
        t.key_negotiation_protocol != null &&
          (n.writeFieldBegin({
            fname: "key_negotiation_protocol",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 154,
          }),
          n.writeI64(BigInt(t.key_negotiation_protocol)),
          n.writeFieldEnd()),
        t.key_messages_received_via_signaling != null &&
          (n.writeFieldBegin({
            fname: "key_messages_received_via_signaling",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 155,
          }),
          n.writeI64(BigInt(t.key_messages_received_via_signaling)),
          n.writeFieldEnd()),
        t.key_messages_received_via_media != null &&
          (n.writeFieldBegin({
            fname: "key_messages_received_via_media",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 156,
          }),
          n.writeI64(BigInt(t.key_messages_received_via_media)),
          n.writeFieldEnd()),
        t.key_messages_received_via_signaling_joiner != null &&
          (n.writeFieldBegin({
            fname: "key_messages_received_via_signaling_joiner",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 157,
          }),
          n.writeI64(BigInt(t.key_messages_received_via_signaling_joiner)),
          n.writeFieldEnd()),
        t.key_messages_received_via_media_joiner != null &&
          (n.writeFieldBegin({
            fname: "key_messages_received_via_media_joiner",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 158,
          }),
          n.writeI64(BigInt(t.key_messages_received_via_media_joiner)),
          n.writeFieldEnd()),
        t.g_e2ee_participant_hash_verification_failed_error != null &&
          (n.writeFieldBegin({
            fname: "g_e2ee_participant_hash_verification_failed_error",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 159,
          }),
          n.writeI64(
            BigInt(t.g_e2ee_participant_hash_verification_failed_error),
          ),
          n.writeFieldEnd()),
        t.g_e2ee_invalid_key_distributor_id_error != null &&
          (n.writeFieldBegin({
            fname: "g_e2ee_invalid_key_distributor_id_error",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 160,
          }),
          n.writeI64(BigInt(t.g_e2ee_invalid_key_distributor_id_error)),
          n.writeFieldEnd()),
        t.g_e2ee_key_message_validation_failure_count != null &&
          (n.writeFieldBegin({
            fname: "g_e2ee_key_message_validation_failure_count",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 161,
          }),
          n.writeI64(BigInt(t.g_e2ee_key_message_validation_failure_count)),
          n.writeFieldEnd()),
        t.g_e2ee_cached_decrypted_key_count != null &&
          (n.writeFieldBegin({
            fname: "g_e2ee_cached_decrypted_key_count",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 162,
          }),
          n.writeI64(BigInt(t.g_e2ee_cached_decrypted_key_count)),
          n.writeFieldEnd()),
        t.g_e2ee_reapply_cached_decrypted_key_count != null &&
          (n.writeFieldBegin({
            fname: "g_e2ee_reapply_cached_decrypted_key_count",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 163,
          }),
          n.writeI64(BigInt(t.g_e2ee_reapply_cached_decrypted_key_count)),
          n.writeFieldEnd()),
        t.g_e2ee_enc_error_frames_data_channel_av1_invalid_obu_offset != null &&
          (n.writeFieldBegin({
            fname:
              "g_e2ee_enc_error_frames_data_channel_av1_invalid_obu_offset",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 164,
          }),
          n.writeI64(
            BigInt(
              t.g_e2ee_enc_error_frames_data_channel_av1_invalid_obu_offset,
            ),
          ),
          n.writeFieldEnd()),
        t.g_e2ee_enc_error_frames_av1_invalid_obu_offset != null &&
          (n.writeFieldBegin({
            fname: "g_e2ee_enc_error_frames_av1_invalid_obu_offset",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 165,
          }),
          n.writeI64(BigInt(t.g_e2ee_enc_error_frames_av1_invalid_obu_offset)),
          n.writeFieldEnd()),
        t.g_e2ee_enc_error_frames_data_channel_av1_insufficient_bytes_for_extension !=
          null &&
          (n.writeFieldBegin({
            fname:
              "g_e2ee_enc_error_frames_data_channel_av1_insufficient_bytes_for_extension",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 166,
          }),
          n.writeI64(
            BigInt(
              t.g_e2ee_enc_error_frames_data_channel_av1_insufficient_bytes_for_extension,
            ),
          ),
          n.writeFieldEnd()),
        t.g_e2ee_enc_error_frames_av1_insufficient_bytes_for_extension !=
          null &&
          (n.writeFieldBegin({
            fname:
              "g_e2ee_enc_error_frames_av1_insufficient_bytes_for_extension",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 167,
          }),
          n.writeI64(
            BigInt(
              t.g_e2ee_enc_error_frames_av1_insufficient_bytes_for_extension,
            ),
          ),
          n.writeFieldEnd()),
        t.g_e2ee_enc_error_frames_data_channel_av1_insufficient_bytes_for_size !=
          null &&
          (n.writeFieldBegin({
            fname:
              "g_e2ee_enc_error_frames_data_channel_av1_insufficient_bytes_for_size",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 168,
          }),
          n.writeI64(
            BigInt(
              t.g_e2ee_enc_error_frames_data_channel_av1_insufficient_bytes_for_size,
            ),
          ),
          n.writeFieldEnd()),
        t.g_e2ee_enc_error_frames_av1_insufficient_bytes_for_size != null &&
          (n.writeFieldBegin({
            fname: "g_e2ee_enc_error_frames_av1_insufficient_bytes_for_size",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 169,
          }),
          n.writeI64(
            BigInt(t.g_e2ee_enc_error_frames_av1_insufficient_bytes_for_size),
          ),
          n.writeFieldEnd()),
        t.g_e2ee_enc_error_frames_data_channel_av1_leb128_parse_failure !=
          null &&
          (n.writeFieldBegin({
            fname:
              "g_e2ee_enc_error_frames_data_channel_av1_leb128_parse_failure",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 170,
          }),
          n.writeI64(
            BigInt(
              t.g_e2ee_enc_error_frames_data_channel_av1_leb128_parse_failure,
            ),
          ),
          n.writeFieldEnd()),
        t.g_e2ee_enc_error_frames_av1_leb128_parse_failure != null &&
          (n.writeFieldBegin({
            fname: "g_e2ee_enc_error_frames_av1_leb128_parse_failure",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 171,
          }),
          n.writeI64(
            BigInt(t.g_e2ee_enc_error_frames_av1_leb128_parse_failure),
          ),
          n.writeFieldEnd()),
        t.g_e2ee_enc_error_frames_data_channel_av1_empty_frame != null &&
          (n.writeFieldBegin({
            fname: "g_e2ee_enc_error_frames_data_channel_av1_empty_frame",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 172,
          }),
          n.writeI64(
            BigInt(t.g_e2ee_enc_error_frames_data_channel_av1_empty_frame),
          ),
          n.writeFieldEnd()),
        t.g_e2ee_enc_error_frames_av1_empty_frame != null &&
          (n.writeFieldBegin({
            fname: "g_e2ee_enc_error_frames_av1_empty_frame",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 173,
          }),
          n.writeI64(BigInt(t.g_e2ee_enc_error_frames_av1_empty_frame)),
          n.writeFieldEnd()),
        t.g_e2ee_dec_error_frames_data_channel_av1_invalid_frame != null &&
          (n.writeFieldBegin({
            fname: "g_e2ee_dec_error_frames_data_channel_av1_invalid_frame",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 174,
          }),
          n.writeI64(
            BigInt(t.g_e2ee_dec_error_frames_data_channel_av1_invalid_frame),
          ),
          n.writeFieldEnd()),
        t.g_e2ee_dec_error_frames_av1_invalid_frame != null &&
          (n.writeFieldBegin({
            fname: "g_e2ee_dec_error_frames_av1_invalid_frame",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 175,
          }),
          n.writeI64(BigInt(t.g_e2ee_dec_error_frames_av1_invalid_frame)),
          n.writeFieldEnd()),
        t.g_e2ee_dec_error_frames_data_channel_av1_deescape_data != null &&
          (n.writeFieldBegin({
            fname: "g_e2ee_dec_error_frames_data_channel_av1_deescape_data",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 176,
          }),
          n.writeI64(
            BigInt(t.g_e2ee_dec_error_frames_data_channel_av1_deescape_data),
          ),
          n.writeFieldEnd()),
        t.g_e2ee_dec_error_frames_av1_deescape_data != null &&
          (n.writeFieldBegin({
            fname: "g_e2ee_dec_error_frames_av1_deescape_data",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 177,
          }),
          n.writeI64(BigInt(t.g_e2ee_dec_error_frames_av1_deescape_data)),
          n.writeFieldEnd()),
        t.g_e2ee_enc_error_frames_data_channel_av1_invalid_frame != null &&
          (n.writeFieldBegin({
            fname: "g_e2ee_enc_error_frames_data_channel_av1_invalid_frame",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 178,
          }),
          n.writeI64(
            BigInt(t.g_e2ee_enc_error_frames_data_channel_av1_invalid_frame),
          ),
          n.writeFieldEnd()),
        t.g_e2ee_enc_error_frames_av1_invalid_frame != null &&
          (n.writeFieldBegin({
            fname: "g_e2ee_enc_error_frames_av1_invalid_frame",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 179,
          }),
          n.writeI64(BigInt(t.g_e2ee_enc_error_frames_av1_invalid_frame)),
          n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function p(t, n) {
      if (
        (n.writeStructBegin("E2eeMetrics"),
        n.writeFieldBegin({
          fname: "p2p_e2ee",
          ftype: (e || (e = r("ThriftTypes"))).STRUCT,
          fid: 1,
        }),
        t.p2p_e2ee != null)
      )
        d(t.p2p_e2ee, n);
      else {
        var o = s();
        d(o, n);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "group_e2ee", ftype: e.STRUCT, fid: 2 }),
        t.group_e2ee != null)
      )
        m(t.group_e2ee, n);
      else {
        var a = u();
        m(a, n);
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function _(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.engine_type = t.readI64().toString())
              : t.skip(a);
            break;
          case 2:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.status = t.readI64().toString())
              : t.skip(a);
            break;
          case 3:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.version = t.readI64().toString())
              : t.skip(a);
            break;
          case 4:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.gen_prekey_bundle_time_ms = t.readI64().toString())
              : t.skip(a);
            break;
          case 5:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.encrypted_msg_time_ms = t.readI64().toString())
              : t.skip(a);
            break;
          case 6:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.decrypted_msg_time_ms = t.readI64().toString())
              : t.skip(a);
            break;
          case 7:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.process_sdp_crypto_time_ms = t.readI64().toString())
              : t.skip(a);
            break;
          case 8:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.create_crypto_offer_time_ms = t.readI64().toString())
              : t.skip(a);
            break;
          case 9:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.create_crypto_answer_time_ms = t.readI64().toString())
              : t.skip(a);
            break;
          case 10:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.get_ik_time_ms = t.readI64().toString())
              : t.skip(a);
            break;
          case 11:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.peer_id = t.readI64().toString())
              : t.skip(a);
            break;
          case 12:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.peer_connection_index = t.readI64().toString())
              : t.skip(a);
            break;
          case 13:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.srtp_crypto_suite = t.readI64().toString())
              : t.skip(a);
            break;
          case 14:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.engine_error = t.readI64().toString())
              : t.skip(a);
            break;
          case 15:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.libsignal_error = t.readI64().toString())
              : t.skip(a);
            break;
          case 16:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.identity_key_mode = t.readI64().toString())
              : t.skip(a);
            break;
          case 17:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.identity_key_num_persistent = t.readI64().toString())
              : t.skip(a);
            break;
          case 18:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.identity_key_num_validated = t.readI64().toString())
              : t.skip(a);
            break;
          case 19:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.identity_key_num_saved = t.readI64().toString())
              : t.skip(a);
            break;
          case 20:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.identity_key_num_existing = t.readI64().toString())
              : t.skip(a);
            break;
          case 21:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.is_e2ee_mandated = t.readI64().toString())
              : t.skip(a);
            break;
          case 22:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.local_trace_id = t.readI64().toString())
              : t.skip(a);
            break;
          case 23:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.remote_trace_id = t.readI64().toString())
              : t.skip(a);
            break;
          case 24:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.local_device_id = t.readI64().toString())
              : t.skip(a);
            break;
          case 25:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.remote_device_id = t.readI64().toString())
              : t.skip(a);
            break;
          case 26:
            if (a === (e || (e = r("ThriftTypes"))).LIST) {
              n.events = [];
              for (var l = t.readListBegin(), s = 0; s < l.size; s++) {
                var u = t.readI64().toString();
                n.events.push(u);
              }
            } else t.skip(a);
            break;
          case 27:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.gen_dtls_auth_info_status = t.readI64().toString())
              : t.skip(a);
            break;
          case 28:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.gen_dtls_auth_info_libsignal_status = t.readI64().toString())
              : t.skip(a);
            break;
          case 29:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.gen_dtls_auth_info_time_ms = t.readI64().toString())
              : t.skip(a);
            break;
          case 30:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.verify_dtls_auth_info_status = t.readI64().toString())
              : t.skip(a);
            break;
          case 31:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.verify_dtls_auth_info_libsignal_status = t
                  .readI64()
                  .toString())
              : t.skip(a);
            break;
          case 32:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.verify_dtls_auth_info_time_ms = t.readI64().toString())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (t.readStructEnd(), n);
    }
    function f(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.received_key_message_counter = t.readI64().toString())
              : t.skip(a);
            break;
          case 2:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.sent_key_message_counter = t.readI64().toString())
              : t.skip(a);
            break;
          case 3:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.cached_key_message_counter = t.readI64().toString())
              : t.skip(a);
            break;
          case 4:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.used_cached_key_counter = t.readI64().toString())
              : t.skip(a);
            break;
          case 5:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.unused_smu_counter = t.readI64().toString())
              : t.skip(a);
            break;
          case 6:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.missing_key_message_counter = t.readI64().toString())
              : t.skip(a);
            break;
          case 7:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.negotiate_off_status = t.readI64().toString())
              : t.skip(a);
            break;
          case 8:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.cipher_suite_status = t.readI64().toString())
              : t.skip(a);
            break;
          case 9:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.decrypt_used_cached_session_counter = t.readI64().toString())
              : t.skip(a);
            break;
          case 10:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.encrypt_used_cached_session_counter = t.readI64().toString())
              : t.skip(a);
            break;
          case 11:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.sent_ack_message_counter = t.readI64().toString())
              : t.skip(a);
            break;
          case 12:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.reuse_ackd_uid_counter = t.readI64().toString())
              : t.skip(a);
            break;
          case 13:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.total_uids_created_counter = t.readI64().toString())
              : t.skip(a);
            break;
          case 14:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.generate_chain_key_failed_error = t.readI64().toString())
              : t.skip(a);
            break;
          case 15:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.set_chain_key_failed_error = t.readI64().toString())
              : t.skip(a);
            break;
          case 16:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.key_provider_not_found_error = t.readI64().toString())
              : t.skip(a);
            break;
          case 17:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.key_message_parse_failed_error = t.readI64().toString())
              : t.skip(a);
            break;
          case 18:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.empty_pkb_result_error = t.readI64().toString())
              : t.skip(a);
            break;
          case 19:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.empty_encrypt_result_error = t.readI64().toString())
              : t.skip(a);
            break;
          case 20:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.empty_decrypt_result_error = t.readI64().toString())
              : t.skip(a);
            break;
          case 21:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.empty_version_error = t.readI64().toString())
              : t.skip(a);
            break;
          case 22:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.unsupported_version_error = t.readI64().toString())
              : t.skip(a);
            break;
          case 23:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.midcall_version_change_error = t.readI64().toString())
              : t.skip(a);
            break;
          case 24:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.inconsistent_remote_maps_error = t.readI64().toString())
              : t.skip(a);
            break;
          case 25:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.key_message_pkb_mismatch_error = t.readI64().toString())
              : t.skip(a);
            break;
          case 26:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.no_key_or_ack_in_e2ee_message_error = t.readI64().toString())
              : t.skip(a);
            break;
          case 27:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.receiver_key_provider_not_found_error = t
                  .readI64()
                  .toString())
              : t.skip(a);
            break;
          case 28:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.pkb_parse_failed_error = t.readI64().toString())
              : t.skip(a);
            break;
          case 29:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.message_deserialized_failed_error = t.readI64().toString())
              : t.skip(a);
            break;
          case 30:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.decrypt_no_identity_key_and_cached_session_not_used_error = t
                  .readI64()
                  .toString())
              : t.skip(a);
            break;
          case 31:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.encrypt_no_identity_key_and_cached_session_not_used_error = t
                  .readI64()
                  .toString())
              : t.skip(a);
            break;
          case 32:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.decrypt_ack_wrong_message_error = t.readI64().toString())
              : t.skip(a);
            break;
          case 33:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.invalid_uid_received_error = t.readI64().toString())
              : t.skip(a);
            break;
          case 34:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.ack_for_absent_user = t.readI64().toString())
              : t.skip(a);
            break;
          case 35:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.uid_not_awaiting_ack_error = t.readI64().toString())
              : t.skip(a);
            break;
          case 36:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.decrypt_ack_error = t.readI64().toString())
              : t.skip(a);
            break;
          case 37:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.empty_decrypt_result_ack_error = t.readI64().toString())
              : t.skip(a);
            break;
          case 38:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.decrypt_ack_cached_session_not_used_error = t
                  .readI64()
                  .toString())
              : t.skip(a);
            break;
          case 39:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.encrypt_ack_error = t.readI64().toString())
              : t.skip(a);
            break;
          case 40:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.empty_encrypt_result_ack_error = t.readI64().toString())
              : t.skip(a);
            break;
          case 41:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.invalid_message_type_error = t.readI64().toString())
              : t.skip(a);
            break;
          case 42:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.server_state_deserialized_failed_error = t
                  .readI64()
                  .toString())
              : t.skip(a);
            break;
          case 43:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.crypto_engine_failure_error = t.readI64().toString())
              : t.skip(a);
            break;
          case 44:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.empty_e2ee_client_state_error = t.readI64().toString())
              : t.skip(a);
            break;
          case 45:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.group_e2ee_negotiated = t.readI64().toString())
              : t.skip(a);
            break;
          case 46:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.negotiation_mode_kn = t.readI64().toString())
              : t.skip(a);
            break;
          case 47:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.group_e2ee_setup_status = t.readI64().toString())
              : t.skip(a);
            break;
          case 48:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.enable_group_e2ee = t.readI64().toString())
              : t.skip(a);
            break;
          case 49:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.identity_key_mode_group = t.readI64().toString())
              : t.skip(a);
            break;
          case 50:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.identity_key_num_persistent_group = t.readI64().toString())
              : t.skip(a);
            break;
          case 51:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.identity_key_num_validated_group = t.readI64().toString())
              : t.skip(a);
            break;
          case 52:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.identity_key_num_saved_group = t.readI64().toString())
              : t.skip(a);
            break;
          case 53:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.identity_key_num_existing_group = t.readI64().toString())
              : t.skip(a);
            break;
          case 54:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.max_key_message_latency_ms = t.readI64().toString())
              : t.skip(a);
            break;
          case 55:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.max_key_message_latency_ms_joiner = t.readI64().toString())
              : t.skip(a);
            break;
          case 56:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.max_smu_to_key_message_latency_ms = t.readI64().toString())
              : t.skip(a);
            break;
          case 57:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.process_smu_time_ms = t.readI64().toString())
              : t.skip(a);
            break;
          case 58:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.decryption_total_frames = t.readI64().toString())
              : t.skip(a);
            break;
          case 59:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.decryption_total_error_frames = t.readI64().toString())
              : t.skip(a);
            break;
          case 60:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.decryption_error_frames_alloc = t.readI64().toString())
              : t.skip(a);
            break;
          case 61:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.decryption_error_frames_invalid_params = t
                  .readI64()
                  .toString())
              : t.skip(a);
            break;
          case 62:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.decryption_error_frames_cipher = t.readI64().toString())
              : t.skip(a);
            break;
          case 63:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.decryption_error_frames_parse = t.readI64().toString())
              : t.skip(a);
            break;
          case 64:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.decryption_error_frames_invalid_key = t.readI64().toString())
              : t.skip(a);
            break;
          case 65:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.decryption_error_frames_missing_key = t.readI64().toString())
              : t.skip(a);
            break;
          case 66:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.decryption_error_frames_out_of_ratchet_space = t
                  .readI64()
                  .toString())
              : t.skip(a);
            break;
          case 67:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.decryption_error_frames_cipher_auth = t.readI64().toString())
              : t.skip(a);
            break;
          case 68:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.decryption_error_frames_frame_too_old = t
                  .readI64()
                  .toString())
              : t.skip(a);
            break;
          case 69:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.decryption_error_frames_seen_frame = t.readI64().toString())
              : t.skip(a);
            break;
          case 70:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.decryption_error_frames_invalid_frame = t
                  .readI64()
                  .toString())
              : t.skip(a);
            break;
          case 71:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.decryption_error_frames_setting_invalid_key = t
                  .readI64()
                  .toString())
              : t.skip(a);
            break;
          case 72:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.decryption_error_frames_setting_existing_key = t
                  .readI64()
                  .toString())
              : t.skip(a);
            break;
          case 73:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.decryption_error_frames_escape_data = t.readI64().toString())
              : t.skip(a);
            break;
          case 74:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.decryption_error_frames_deescape_data = t
                  .readI64()
                  .toString())
              : t.skip(a);
            break;
          case 75:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.decryption_error_frames_parse_frame_or_key = t
                  .readI64()
                  .toString())
              : t.skip(a);
            break;
          case 76:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.decryption_error_frames_unknown = t.readI64().toString())
              : t.skip(a);
            break;
          case 77:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.decryption_unencrypted_frames = t.readI64().toString())
              : t.skip(a);
            break;
          case 78:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.encryption_total_frames = t.readI64().toString())
              : t.skip(a);
            break;
          case 79:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.encryption_error_frames = t.readI64().toString())
              : t.skip(a);
            break;
          case 80:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.encryption_escape_bytes = t.readI64().toString())
              : t.skip(a);
            break;
          case 81:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.encryption_total_error_frames = t.readI64().toString())
              : t.skip(a);
            break;
          case 82:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.encryption_error_frames_alloc = t.readI64().toString())
              : t.skip(a);
            break;
          case 83:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.encryption_error_frames_invalid_params = t
                  .readI64()
                  .toString())
              : t.skip(a);
            break;
          case 84:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.encryption_error_frames_cipher = t.readI64().toString())
              : t.skip(a);
            break;
          case 85:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.encryption_error_frames_parse = t.readI64().toString())
              : t.skip(a);
            break;
          case 86:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.encryption_error_frames_invalid_key = t.readI64().toString())
              : t.skip(a);
            break;
          case 87:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.encryption_error_frames_cipher_auth = t.readI64().toString())
              : t.skip(a);
            break;
          case 88:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.encryption_error_frames_escape_data = t.readI64().toString())
              : t.skip(a);
            break;
          case 89:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.encryption_error_frames_unsupported_codec = t
                  .readI64()
                  .toString())
              : t.skip(a);
            break;
          case 90:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.encryption_error_frames_unknown = t.readI64().toString())
              : t.skip(a);
            break;
          case 91:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.decryption_total_frames_data_channel = t
                  .readI64()
                  .toString())
              : t.skip(a);
            break;
          case 92:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.decryption_total_error_frames_data_channel = t
                  .readI64()
                  .toString())
              : t.skip(a);
            break;
          case 93:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.decryption_error_frames_data_channel_alloc = t
                  .readI64()
                  .toString())
              : t.skip(a);
            break;
          case 94:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.decryption_error_frames_data_channel_invalid_params = t
                  .readI64()
                  .toString())
              : t.skip(a);
            break;
          case 95:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.decryption_error_frames_data_channel_cipher = t
                  .readI64()
                  .toString())
              : t.skip(a);
            break;
          case 96:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.decryption_error_frames_data_channel_parse = t
                  .readI64()
                  .toString())
              : t.skip(a);
            break;
          case 97:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.decryption_error_frames_data_channel_invalid_key = t
                  .readI64()
                  .toString())
              : t.skip(a);
            break;
          case 98:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.decryption_error_frames_data_channel_missing_key = t
                  .readI64()
                  .toString())
              : t.skip(a);
            break;
          case 99:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.decryption_error_frames_data_channel_out_of_ratchet_space = t
                  .readI64()
                  .toString())
              : t.skip(a);
            break;
          case 100:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.decryption_error_frames_data_channel_cipher_auth = t
                  .readI64()
                  .toString())
              : t.skip(a);
            break;
          case 101:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.decryption_error_frames_data_channel_frame_too_old = t
                  .readI64()
                  .toString())
              : t.skip(a);
            break;
          case 102:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.decryption_error_frames_data_channel_seen_frame = t
                  .readI64()
                  .toString())
              : t.skip(a);
            break;
          case 103:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.decryption_error_frames_data_channel_invalid_frame = t
                  .readI64()
                  .toString())
              : t.skip(a);
            break;
          case 104:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.decryption_error_frames_data_channel_setting_invalid_key = t
                  .readI64()
                  .toString())
              : t.skip(a);
            break;
          case 105:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.decryption_error_frames_data_channel_setting_existing_key = t
                  .readI64()
                  .toString())
              : t.skip(a);
            break;
          case 106:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.decryption_error_frames_data_channel_escape_data = t
                  .readI64()
                  .toString())
              : t.skip(a);
            break;
          case 107:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.decryption_error_frames_data_channel_deescape_data = t
                  .readI64()
                  .toString())
              : t.skip(a);
            break;
          case 108:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.decryption_error_frames_data_channel_parse_frame_or_key = t
                  .readI64()
                  .toString())
              : t.skip(a);
            break;
          case 109:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.decryption_error_frames_data_channel_unknown = t
                  .readI64()
                  .toString())
              : t.skip(a);
            break;
          case 110:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.decryption_unencrypted_frames_data_channel = t
                  .readI64()
                  .toString())
              : t.skip(a);
            break;
          case 111:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.encryption_total_frames_data_channel = t
                  .readI64()
                  .toString())
              : t.skip(a);
            break;
          case 112:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.encryption_error_frames_data_channel = t
                  .readI64()
                  .toString())
              : t.skip(a);
            break;
          case 113:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.encryption_total_error_frames_data_channel = t
                  .readI64()
                  .toString())
              : t.skip(a);
            break;
          case 114:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.encryption_error_frames_data_channel_alloc = t
                  .readI64()
                  .toString())
              : t.skip(a);
            break;
          case 115:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.encryption_error_frames_data_channel_invalid_params = t
                  .readI64()
                  .toString())
              : t.skip(a);
            break;
          case 116:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.encryption_error_frames_data_channel_cipher = t
                  .readI64()
                  .toString())
              : t.skip(a);
            break;
          case 117:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.encryption_error_frames_data_channel_parse = t
                  .readI64()
                  .toString())
              : t.skip(a);
            break;
          case 118:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.encryption_error_frames_data_channel_invalid_key = t
                  .readI64()
                  .toString())
              : t.skip(a);
            break;
          case 119:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.encryption_error_frames_data_channel_cipher_auth = t
                  .readI64()
                  .toString())
              : t.skip(a);
            break;
          case 120:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.encryption_error_frames_data_channel_escape_data = t
                  .readI64()
                  .toString())
              : t.skip(a);
            break;
          case 121:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.encryption_error_frames_data_channel_unsupported_codec = t
                  .readI64()
                  .toString())
              : t.skip(a);
            break;
          case 122:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.encryption_error_frames_data_channel_unknown = t
                  .readI64()
                  .toString())
              : t.skip(a);
            break;
          case 123:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.num_removed_data_decryptors = t.readI64().toString())
              : t.skip(a);
            break;
          case 124:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.num_frame_decryptor_with_unencrypted_data = t
                  .readI64()
                  .toString())
              : t.skip(a);
            break;
          case 125:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.num_removed_decryptors = t.readI64().toString())
              : t.skip(a);
            break;
          case 126:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.data_channel_encryption_not_ready_in_mandated_calls_error = t
                  .readI64()
                  .toString())
              : t.skip(a);
            break;
          case 127:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.num_e2ee_message_total_encrypt = t.readI64().toString())
              : t.skip(a);
            break;
          case 128:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.num_e2ee_message_error_encrypt = t.readI64().toString())
              : t.skip(a);
            break;
          case 129:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.num_e2ee_message_total_decrypt = t.readI64().toString())
              : t.skip(a);
            break;
          case 130:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.num_e2ee_message_error_decrypt = t.readI64().toString())
              : t.skip(a);
            break;
          case 131:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.negotiate_off_time = t.readI64().toString())
              : t.skip(a);
            break;
          case 132:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.negotiated_version = t.readI64().toString())
              : t.skip(a);
            break;
          case 133:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.decryptor_removed_time = t.readI64().toString())
              : t.skip(a);
            break;
          case 134:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.is_e2ee_mandated_group = t.readI64().toString())
              : t.skip(a);
            break;
          case 135:
            if (a === (e || (e = r("ThriftTypes"))).LIST) {
              n.events = [];
              for (var l = t.readListBegin(), s = 0; s < l.size; s++) {
                var u = t.readI64().toString();
                n.events.push(u);
              }
            } else t.skip(a);
            break;
          case 136:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.num_e2ee_message_received = t.readI64().toString())
              : t.skip(a);
            break;
          case 137:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.num_e2ee_message_error_decrypt_non_e2ee_received = t
                  .readI64()
                  .toString())
              : t.skip(a);
            break;
          case 138:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.num_e2ee_message_error_decrypt_missing_sender = t
                  .readI64()
                  .toString())
              : t.skip(a);
            break;
          case 139:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.num_e2ee_message_error_decrypt_exceeding_retry = t
                  .readI64()
                  .toString())
              : t.skip(a);
            break;
          case 140:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.max_media_channel_key_message_retry_count = t
                  .readI64()
                  .toString())
              : t.skip(a);
            break;
          case 141:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.g_e2ee_total_count_of_extra_decryptions = t
                  .readI64()
                  .toString())
              : t.skip(a);
            break;
          case 142:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.g_e2ee_total_count_of_extra_decryptions_failures = t
                  .readI64()
                  .toString())
              : t.skip(a);
            break;
          case 143:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.g_e2ee_total_count_of_extra_decryptions_failures_due_to_missing_key =
                  t.readI64().toString())
              : t.skip(a);
            break;
          case 144:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.g_e2ee_decryption_error_frames_empty_supported_codes = t
                  .readI64()
                  .toString())
              : t.skip(a);
            break;
          case 146:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.g_e2ee_encryption_error_frames_empty = t
                  .readI64()
                  .toString())
              : t.skip(a);
            break;
          case 147:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.g_e2ee_encryption_error_frames_empty_nalu_blocks = t
                  .readI64()
                  .toString())
              : t.skip(a);
            break;
          case 148:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.g_e2ee_encryption_error_frames_invalid_h264 = t
                  .readI64()
                  .toString())
              : t.skip(a);
            break;
          case 149:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.g_e2ee_encryption_error_frames_invalid_h265 = t
                  .readI64()
                  .toString())
              : t.skip(a);
            break;
          case 150:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.g_e2ee_encryption_error_frames_invalid_h265_nalu_block = t
                  .readI64()
                  .toString())
              : t.skip(a);
            break;
          case 151:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.g_e2ee_total_count_of_extra_encryptions = t
                  .readI64()
                  .toString())
              : t.skip(a);
            break;
          case 152:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.g_e2ee_total_count_of_extra_encryptions_failures = t
                  .readI64()
                  .toString())
              : t.skip(a);
            break;
          case 153:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.encryption_error_frames_no_active_key = t
                  .readI64()
                  .toString())
              : t.skip(a);
            break;
          case 154:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.key_negotiation_protocol = t.readI64().toString())
              : t.skip(a);
            break;
          case 155:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.key_messages_received_via_signaling = t.readI64().toString())
              : t.skip(a);
            break;
          case 156:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.key_messages_received_via_media = t.readI64().toString())
              : t.skip(a);
            break;
          case 157:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.key_messages_received_via_signaling_joiner = t
                  .readI64()
                  .toString())
              : t.skip(a);
            break;
          case 158:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.key_messages_received_via_media_joiner = t
                  .readI64()
                  .toString())
              : t.skip(a);
            break;
          case 159:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.g_e2ee_participant_hash_verification_failed_error = t
                  .readI64()
                  .toString())
              : t.skip(a);
            break;
          case 160:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.g_e2ee_invalid_key_distributor_id_error = t
                  .readI64()
                  .toString())
              : t.skip(a);
            break;
          case 161:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.g_e2ee_key_message_validation_failure_count = t
                  .readI64()
                  .toString())
              : t.skip(a);
            break;
          case 162:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.g_e2ee_cached_decrypted_key_count = t.readI64().toString())
              : t.skip(a);
            break;
          case 163:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.g_e2ee_reapply_cached_decrypted_key_count = t
                  .readI64()
                  .toString())
              : t.skip(a);
            break;
          case 164:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.g_e2ee_enc_error_frames_data_channel_av1_invalid_obu_offset =
                  t.readI64().toString())
              : t.skip(a);
            break;
          case 165:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.g_e2ee_enc_error_frames_av1_invalid_obu_offset = t
                  .readI64()
                  .toString())
              : t.skip(a);
            break;
          case 166:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.g_e2ee_enc_error_frames_data_channel_av1_insufficient_bytes_for_extension =
                  t.readI64().toString())
              : t.skip(a);
            break;
          case 167:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.g_e2ee_enc_error_frames_av1_insufficient_bytes_for_extension =
                  t.readI64().toString())
              : t.skip(a);
            break;
          case 168:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.g_e2ee_enc_error_frames_data_channel_av1_insufficient_bytes_for_size =
                  t.readI64().toString())
              : t.skip(a);
            break;
          case 169:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.g_e2ee_enc_error_frames_av1_insufficient_bytes_for_size = t
                  .readI64()
                  .toString())
              : t.skip(a);
            break;
          case 170:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.g_e2ee_enc_error_frames_data_channel_av1_leb128_parse_failure =
                  t.readI64().toString())
              : t.skip(a);
            break;
          case 171:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.g_e2ee_enc_error_frames_av1_leb128_parse_failure = t
                  .readI64()
                  .toString())
              : t.skip(a);
            break;
          case 172:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.g_e2ee_enc_error_frames_data_channel_av1_empty_frame = t
                  .readI64()
                  .toString())
              : t.skip(a);
            break;
          case 173:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.g_e2ee_enc_error_frames_av1_empty_frame = t
                  .readI64()
                  .toString())
              : t.skip(a);
            break;
          case 174:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.g_e2ee_dec_error_frames_data_channel_av1_invalid_frame = t
                  .readI64()
                  .toString())
              : t.skip(a);
            break;
          case 175:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.g_e2ee_dec_error_frames_av1_invalid_frame = t
                  .readI64()
                  .toString())
              : t.skip(a);
            break;
          case 176:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.g_e2ee_dec_error_frames_data_channel_av1_deescape_data = t
                  .readI64()
                  .toString())
              : t.skip(a);
            break;
          case 177:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.g_e2ee_dec_error_frames_av1_deescape_data = t
                  .readI64()
                  .toString())
              : t.skip(a);
            break;
          case 178:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.g_e2ee_enc_error_frames_data_channel_av1_invalid_frame = t
                  .readI64()
                  .toString())
              : t.skip(a);
            break;
          case 179:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.g_e2ee_enc_error_frames_av1_invalid_frame = t
                  .readI64()
                  .toString())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (t.readStructEnd(), n);
    }
    function g(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            a === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.p2p_e2ee = _(t))
              : t.skip(a);
            break;
          case 2:
            a === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.group_e2ee = f(t))
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.p2p_e2ee === void 0 && (n.p2p_e2ee = s()),
        n.group_e2ee === void 0 && (n.group_e2ee = u()),
        n
      );
    }
    ((l.P2pE2eeMetrics$DefaultConstructor = s),
      (l.GroupE2eeMetrics$DefaultConstructor = u),
      (l.E2eeMetrics$DefaultConstructor = c),
      (l.serializeP2pE2eeMetrics = d),
      (l.serializeGroupE2eeMetrics = m),
      (l.serializeE2eeMetrics = p),
      (l.deserializeP2pE2eeMetrics = _),
      (l.deserializeGroupE2eeMetrics = f),
      (l.deserializeE2eeMetrics = g));
  },
  98,
);

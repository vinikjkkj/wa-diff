__d(
  "LSDbForeignKeys",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
        attachments: [
          { indexName: "fk_attachments", tableName: "attachment_items" },
          { indexName: "fk_attachments", tableName: "attachment_ctas" },
        ],
        community_chat_poll_options: [
          { tableName: "community_chat_poll_votes" },
        ],
        community_chat_polls: [
          { tableName: "community_chat_poll_options" },
          { tableName: "community_chat_poll_votes" },
        ],
        data_trace_meta: [
          { indexName: "traceIdAddonId", tableName: "data_trace_addon" },
        ],
        messages: [
          { indexName: "fk_messages", tableName: "attachments" },
          { indexName: "fk_messages", tableName: "reactions" },
        ],
        pending_tasks: [
          { tableName: "encrypted_backup_restore_task_payload_context" },
          {
            indexName: "fk_pending_tasks",
            tableName: "pending_backups_context_v2",
          },
          {
            indexName: "fk_pending_tasks",
            tableName: "secure_recovery_code_data",
          },
          {
            indexName: "fk_pending_tasks",
            tableName: "secure_encrypted_backups_message_thread_id_context",
          },
          { tableName: "messages_optimistic_context" },
        ],
        rooms: [{ tableName: "room_participants" }],
        secure_encrypted_backups_client_state: [
          {
            indexName: "fk_secure_encrypted_backups_client_state",
            tableName: "secure_encrypted_backups_epochs",
          },
        ],
        secure_encrypted_backups_devices: [
          {
            indexName:
              "fk_secure_encrypted_backups_device_supported_versions_device_id",
            tableName: "secure_encrypted_backups_device_supported_versions",
          },
        ],
        threads: [
          { indexName: "threadKeyCtaId", tableName: "thread_nullstate_ctas" },
          { tableName: "messages" },
          { tableName: "attachments" },
          { tableName: "thread_nullstate" },
          { tableName: "messages_ranges_v2__generated" },
          { tableName: "attachments_ranges_v2__generated" },
          { tableName: "participants" },
          { indexName: "fk_threads", tableName: "mi_act_mapping_table" },
          { tableName: "group_invites" },
        ],
      },
      l = e;
    i.default = l;
  },
  66,
);

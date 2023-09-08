import axios from "axios"
const moithilsAPI = axios.create({
  baseURL: "https://moithils-7.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_docs_schema_retrieve(payload) {
  return moithilsAPI.get(`/api-docs/schema/`, {
    params: { lang: payload.lang }
  })
}
function api_v1_login_create(payload) {
  return moithilsAPI.post(`/api/v1/login/`, payload)
}
function api_v1_signup_create(payload) {
  return moithilsAPI.post(`/api/v1/signup/`, payload)
}
function modules_drive_service_create_folder_create(payload) {
  return moithilsAPI.post(`/modules/drive/service/create/folder/`, payload)
}
function modules_drive_service_file_list_retrieve(payload) {
  return moithilsAPI.get(`/modules/drive/service/file/list/`)
}
function modules_drive_service_share_file_create(payload) {
  return moithilsAPI.post(`/modules/drive/service/share/file/`, payload)
}
function modules_drive_service_upload_file_create(payload) {
  return moithilsAPI.post(`/modules/drive/service/upload/file/`, payload)
}
function modules_hubspot_service_access_token_create(payload) {
  return moithilsAPI.post(`/modules/hubspot/service/access/token/`)
}
function modules_hubspot_service_contact_deals_list_retrieve(payload) {
  return moithilsAPI.get(`/modules/hubspot/service/contact/deals/list/`)
}
function modules_hubspot_service_deals_associations_create_create(payload) {
  return moithilsAPI.post(`/modules/hubspot/service/deals/associations/create/`)
}
function modules_hubspot_service_deals_create_create(payload) {
  return moithilsAPI.post(`/modules/hubspot/service/deals/create/`)
}
function modules_hubspot_service_deals_list_retrieve(payload) {
  return moithilsAPI.get(`/modules/hubspot/service/deals/list/`)
}
function modules_hubspot_service_deals_remove_destroy(payload) {
  return moithilsAPI.delete(`/modules/hubspot/service/deals/remove/`)
}
function modules_hubspot_service_deals_single_retrieve(payload) {
  return moithilsAPI.get(`/modules/hubspot/service/deals/single/`)
}
function modules_hubspot_service_events_create_create(payload) {
  return moithilsAPI.post(`/modules/hubspot/service/events/create/`)
}
function modules_hubspot_service_meeting_contacts_list_retrieve(payload) {
  return moithilsAPI.get(`/modules/hubspot/service/meeting/contacts/list/`)
}
function modules_hubspot_service_ticket_associations_create_update(payload) {
  return moithilsAPI.put(`/modules/hubspot/service/ticket/associations/create/`)
}
function modules_hubspot_service_ticket_associations_list_retrieve(payload) {
  return moithilsAPI.get(`/modules/hubspot/service/ticket/associations/list/`)
}
function modules_hubspot_service_tickets_create_create(payload) {
  return moithilsAPI.post(`/modules/hubspot/service/tickets/create/`)
}
function modules_hubspot_service_tickets_list_retrieve(payload) {
  return moithilsAPI.get(`/modules/hubspot/service/tickets/list/`)
}
function modules_hubspot_service_tickets_remove_destroy(payload) {
  return moithilsAPI.delete(`/modules/hubspot/service/tickets/remove/`)
}
function modules_hubspot_service_tickets_single_retrieve(payload) {
  return moithilsAPI.get(`/modules/hubspot/service/tickets/single/`)
}
function modules_hubspot_service_webhook_create(payload) {
  return moithilsAPI.post(`/modules/hubspot/service/webhook/`)
}
function modules_slack_service_archive_channel_create(payload) {
  return moithilsAPI.post(
    `/modules/slack/service/${payload.id}/archive_channel/`,
    payload
  )
}
function modules_slack_service_channel_history_retrieve(payload) {
  return moithilsAPI.get(
    `/modules/slack/service/${payload.id}/channel_history/`
  )
}
function modules_slack_service_get_channel_id_retrieve(payload) {
  return moithilsAPI.get(`/modules/slack/service/${payload.id}/get-channel-id/`)
}
function modules_slack_service_create_channel_create(payload) {
  return moithilsAPI.post(`/modules/slack/service/create-channel/`, payload)
}
function modules_slack_service_get_users_retrieve(payload) {
  return moithilsAPI.get(`/modules/slack/service/get_users/`)
}
function modules_slack_service_invite_user_to_channel_create(payload) {
  return moithilsAPI.post(
    `/modules/slack/service/invite-user-to-channel/`,
    payload
  )
}
function modules_slack_service_send_message_create(payload) {
  return moithilsAPI.post(`/modules/slack/service/send-message/`, payload)
}
function modules_slack_service_upload_file_create(payload) {
  return moithilsAPI.post(`/modules/slack/service/upload-file/`, payload)
}
function rest_auth_login_create(payload) {
  return moithilsAPI.post(`/rest-auth/login/`, payload)
}
function rest_auth_logout_retrieve(payload) {
  return moithilsAPI.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create(payload) {
  return moithilsAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return moithilsAPI.post(`/rest-auth/password/change/`, payload)
}
function rest_auth_password_reset_create(payload) {
  return moithilsAPI.post(`/rest-auth/password/reset/`, payload)
}
function rest_auth_password_reset_confirm_create(payload) {
  return moithilsAPI.post(`/rest-auth/password/reset/confirm/`, payload)
}
function rest_auth_registration_create(payload) {
  return moithilsAPI.post(`/rest-auth/registration/`, payload)
}
function rest_auth_registration_verify_email_create(payload) {
  return moithilsAPI.post(`/rest-auth/registration/verify-email/`, payload)
}
function rest_auth_user_retrieve(payload) {
  return moithilsAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return moithilsAPI.put(`/rest-auth/user/`, payload)
}
function rest_auth_user_partial_update(payload) {
  return moithilsAPI.patch(`/rest-auth/user/`, payload)
}
export const apiService = {
  api_docs_schema_retrieve,
  api_v1_login_create,
  api_v1_signup_create,
  modules_drive_service_create_folder_create,
  modules_drive_service_file_list_retrieve,
  modules_drive_service_share_file_create,
  modules_drive_service_upload_file_create,
  modules_hubspot_service_access_token_create,
  modules_hubspot_service_contact_deals_list_retrieve,
  modules_hubspot_service_deals_associations_create_create,
  modules_hubspot_service_deals_create_create,
  modules_hubspot_service_deals_list_retrieve,
  modules_hubspot_service_deals_remove_destroy,
  modules_hubspot_service_deals_single_retrieve,
  modules_hubspot_service_events_create_create,
  modules_hubspot_service_meeting_contacts_list_retrieve,
  modules_hubspot_service_ticket_associations_create_update,
  modules_hubspot_service_ticket_associations_list_retrieve,
  modules_hubspot_service_tickets_create_create,
  modules_hubspot_service_tickets_list_retrieve,
  modules_hubspot_service_tickets_remove_destroy,
  modules_hubspot_service_tickets_single_retrieve,
  modules_hubspot_service_webhook_create,
  modules_slack_service_archive_channel_create,
  modules_slack_service_channel_history_retrieve,
  modules_slack_service_get_channel_id_retrieve,
  modules_slack_service_create_channel_create,
  modules_slack_service_get_users_retrieve,
  modules_slack_service_invite_user_to_channel_create,
  modules_slack_service_send_message_create,
  modules_slack_service_upload_file_create,
  rest_auth_login_create,
  rest_auth_logout_retrieve,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
}

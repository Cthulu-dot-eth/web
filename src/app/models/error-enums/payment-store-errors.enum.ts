export enum PaymentStoreErrorsEnum {
  UNKOWN = "UNKNOWN_PAYMENT",
  NO_NETWORK_CONNECTION = "NO_NETWORK_CONNECTION",
  QRSCANNER_CAMERA_NO_PERMISSION = "QRSCANNER_CAMERA_NO_PERMISSION",
  QRSCANNED_RESULT_ERROR = "QRSCANNED_RESULT_ERROR",
  QRSCAN_CANCELLED = "QRSCAN_CANCELLED",
  PIN_INVALID = "PIN_INVALID",
  SIGNING_PAYMENT_ERROR = "SIGNING_PAYMENT_ERROR",
  QRSCANNED_WALLET_ADDRESS_INVALID = "QRSCANNED_WALLET_ADDRESS_INVALID",
  PAYMENT_RELAY_FAILED = "PAYMENT_RELAY_FAILED",
  PAYMENT_FAILED_AMOUNT_ZERO = "PAYMENT_FAILED_AMOUNT_ZERO",
  PAYMENT_FAILED_INSUFFICIENT_FUNDS = "PAYMENT_FAILED_INSUFFICIENT_FUNDS",
  PAYMENT_FAILED_EXPIRED = "PAYMENT_FAILED_EXPIRED",
  PAYMENT_FAILED_TOKEN_NOT_SUPPORTED = "PAYMENT_FAILED_TOKEN_NOT_SUPPORTED",
  PAYMENT_FAILED_UNKNOWN = "PAYMENT_FAILED_UNKNOWN",
  PAYMENT_FAILED_SIGNATURE_INVALID = "PAYMENT_FAILED_SIGNATURE_INVALID",
  PAYMENT_FAILED_PAYEE_ADDRESS_INVALID = "PAYMENT_FAILED_PAYEE_ADDRESS_INVALID",
  PAYMENT_FAILED_WITHDRAW_FAILURE = "PAYMENT_FAILED_WITHDRAW_FAILURE",
  PAYMENT_FAILED_WALLET_INITIALISATION_FAILURE = "PAYMENT_FAILED_WALLET_INITIALISATION_FAILURE",
  PAYMENT_FAILED_WALLET_RECOVERY_FAILURE = "PAYMENT_FAILED_WALLET_RECOVERY_FAILURE",
  PAYMENT_FAILED_EXCHANGE_CURRENCIES_DUPLICATE = "PAYMENT_FAILED_EXCHANGE_CURRENCIES_DUPLICATE",
  PAYMENT_FAILED_INSUFFICIENT_LIQUIDITY = "PAYMENT_FAILED_INSUFFICIENT_LIQUIDITY",
  PAYMENT_FAILED_NONCE_COLLUSION = "PAYMENT_FAILED_NONCE_COLLUSION",
  PAYMENT_FAILED_SERVER_BUSY = "PAYMENT_FAILED_SERVER_BUSY",
  PAYMENT_FAILED_MARKET_CLOSED = "PAYMENT_FAILED_MARKET_CLOSED",
  PAYMENT_FAILED_WALLET_ID_TAKEN = "PAYMENT_FAILED_WALLET_ID_TAKEN",
  PAYMENT_FAILED_MARKET_NOT_SUPPORTED = "PAYMENT_FAILED_MARKET_NOT_SUPPORTED",
  PAYMENT_FAILED_MULTISIG_QUORUM_FAILED = "PAYMENT_FAILED_MULTISIG_QUORUM_FAILED",
  PAYMENT_FAILED_MULTISIG_STORAGE_FULL = "PAYMENT_FAILED_MULTISIG_STORAGE_FULL",
  PAYMENT_FAILED_MULTISIG_NO_ENTRY = "PAYMENT_FAILED_MULTISIG_NO_ENTRY",
  PAYMENT_HISTORY_REMOVAL_FAILED = "PAYMENT_HISTORY_REMOVAL_FAILED",
  PAYMENT_FAILED_ALREADY_FULFILLED = "PAYMENT_FAILED_ALREADY_FULFILLED",
}
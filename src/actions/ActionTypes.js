import { createConstants } from '../utils/actions'

export default createConstants(
  'CHANGELANG',
  'CURRENTUSER',
  'IPS',
  'HYPS',
  'HYPUSAGE',
  'HYPDETAIL',
  'COMMAND',
  'LOCATION',
  'ISO',
  'UPLOADISO',
  'DELETEISO',
  'ADDHYP',
  'UPDATEPASS',
  'DELETEHYP',
  'VMBILLS',
  'GETISOMD5',
  'VALIDATEISO',
  'VMBILLSINGLE',
  'PIN',
  'UNPIN',
  'MIGRATE',
  'RETRYCREATE',
  'DUMPXML',
  'LISTBACKUP',
  'MAKEBACKUP',
  'DELETEBACKUP',
  'RESTOREBACKUP',
  'DELETEVM',
  'DEQUEUEVM',
  'RENEWVM',
  'POWERVM',
  'CREATEVM',
  'VMINVOICES',
  'UPDATEINVOICE',
  'IPHISTORY',
  'USER',
  'USERS',
  'USERORDERS',
  'USERTRANSACTIONS',
  'UPDATEBALANCE',
  'INVOICES',
  'OS',

  'GROUPS',
  'GROUP',

  'PRODUCTS',
  'PRODUCT',
  'PFAS',
  'PCS',
  'QBS',
  'ADDEDITPRODUCT',
  'DELETEPRODUCT',
  'PRODUCTFEATURES',
  'RESETBRUSH',
  'FINALIZEMIGRATE',
  'ADDPRODUCTFEATURE',
  'DELETEPRODUCTFEATURE',
  'ADDEDITPFA',
  'DELETEPFA',
  'ADDEDITPC',
  'DELETEPC',
  'ADDEDITQB',
  'DELETEQB',
  'DEFAULTPRODUCTS',
  'CFSINVOICES',
  'CFSINVOICE',
  'CFSPAYINVOICE',
  'ADDGROUP',
  'UPGRADEGROUP',
  'UPLOADCHART',
  'DOWNLOADCHART',
  'USERINVOICES',
  'USERVMINVOICES',
  'SYSTEMAUTH',
  'SYSTEMAUTHENABLE',
  'SYSTEMAUTHDISABLE',
  'USERAUTH',
  'USERAUTHENABLE',
  'USERAUTHDISABLE',
  'EXPORTFILE',
  'USERIPHISTORIES',
  'CFSREJECTINVOICEPAY',
  'GETDOCS',
  'SETDOCSTATUS',
  'GETDOCSTATUS',
  'USERPLAN',
  'USERUSERS',
  'CHANGEPASS',


  // ***** BUSINESS
  'B_UPLOADCHART',
  'B_DOWNLOADCHART',
  'B_PLANGROUP',
  'B_NEWUSER',
  'B_PLANS',
  'B_BUYPLAN',
  'B_USERS',

  'B_RESEND',
  'B_DELETEUSER',
  'B_LOGINASCLIENT',
  'B_CHANGEQUOTA',
  'B_ACTIVATE',
  'B_DEACTIVATE',
  'B_ADDADMINTOGROUP',
  'B_ISADMININGROUP',
  'B_USERSCOUNT',
  'B_INVOICES',
  'B_OFFLINEPAYMENT',
  'B_INVOICE',
  'B_PAYIDENTIFIER',
  'B_PAYMENTBANK',
  'B_UPGRADEPLAN',
  'TOGGLE_PAGE'
)
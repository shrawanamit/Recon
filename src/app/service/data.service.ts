import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import * as global from 'src/app/globals';
import { environment } from 'src/environments/environment';
import { GlobalService } from './global.service';
import { Subject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
//import * as AllActiveSummary from '../../assets/data/GetAllActiveCommunicationSummary.json'
@Injectable({
	providedIn: 'root'
})

export class DataService {


	auth = 'test1';
	GLOBAL_AUTH_KEY = 'test';

	constructor(private httpClient: HttpClient, private globalService: GlobalService) { }
	doLogin(userName, password) {
		const input = JSON.stringify({
			userName: userName,
			passwords: password

		});
		const httpHeaders = new HttpHeaders({
			'content-type': 'application/json',
			'cache-control': 'no-cache'

		});
		const options = {
			headers: httpHeaders
		};
		// console.log(environment[global.env].API_URL);
		localStorage.setItem("Envurl", environment[global.env].API_URL);
		return this.httpClient.post(environment[global.env].API_URL + '/api/Common/GetUserDetails', input, options);
	}


	
	getAllProgram(userID) {

		return this.httpClient.get(environment[global.env].API_URL + '/api/Recon/GetActiveBrands?UserId=' + userID);
	}
	getBrandsBasicDetails() {
		return this.httpClient.get(environment[global.env].API_URL + '/api/Recon/GetBrandsBasicDetails');
	}
	// GetDREnableProgram() {
	// 	return this.httpClient.get(environment[global.env].API_URL + '/api/DigitalReceipt/GetDREnableProgram');
	// }
	// GetTenantCommunicationSummary(selectedProgram, billType, startDate, endDate, storeWise, mobile, billID) {
	// 	const input = JSON.stringify({
	// 		BrandMasterList: selectedProgram,
	// 		DateType: parseInt(billType),
	// 		FromDate: startDate,
	// 		ToDate: endDate,
	// 		StoreCode: storeWise,
	// 		MobileNo: mobile,
	// 		BillNo: billID

	// 	});
	// 	const httpHeaders = new HttpHeaders({
	// 		'content-type': 'application/json',
	// 		'cache-control': 'no-cache'

	// 	});
	// 	const options = {
	// 		headers: httpHeaders
	// 	};
	// 	return this.httpClient.post(environment[global.env].API_URL + '/api/DigitalReceipt/GetTenantCommunicationSummary', input, options);
	// }
	getsearchProgramData(selectedProgram, billType, startDate, endDate, storeWise, mobile, billID) {
		const input = JSON.stringify({
			BrandMasterList: selectedProgram,
			DateType: parseInt(billType),
			FromDate: startDate,
			ToDate: endDate,
			StoreCode: storeWise,
			MobileNo: mobile,
			BillNo: billID

		});
		const httpHeaders = new HttpHeaders({
			'content-type': 'application/json',
			'cache-control': 'no-cache'

		});
		const options = {
			headers: httpHeaders
		};

		return this.httpClient.post(environment[global.env].API_URL + '/api/Recon/GetBrandsStatusCount', input, options);
	}



	transactionData(selectedProgram, billType, TransactionType, startDate, endDate, storeWise, mobile, billID, status, pageSize, OffSetLimit, statusCode) {
		if (storeWise == undefined) {
			storeWise = '';
		}
		if (mobile == undefined) {
			mobile = '';
		}
		if (billID == undefined) {
			billID = '';
		}
		const input = JSON.stringify({
			BrandMasterList: selectedProgram,
			DateType: parseInt(billType),
			TransactionType: TransactionType,
			FromDate: startDate,
			ToDate: endDate,
			StoreCode: storeWise,
			MobileNo: mobile,
			BillNo: billID,
			Status: status,
			PageSize: pageSize,
			OffSetLimit,
			StatusCode: statusCode

		});
		const httpHeaders = new HttpHeaders({
			'content-type': 'application/json',
			'cache-control': 'no-cache'

		});
		const options = {
			headers: httpHeaders
		};
		return this.httpClient.post(environment[global.env].API_URL + '/api/Recon/DisplayCustomerBillTransactions', input, options);
	}

	//////////////////////////
	displayErrorMessageCount(selectedProgram, billType, startDate, endDate, storeWise, mobile, billID, status) {
		if (storeWise == undefined) {
			storeWise = '';
		}
		if (mobile == undefined) {
			mobile = '';
		}
		if (billID == undefined) {
			billID = '';
		}
		const input = JSON.stringify({
			BrandMasterList: selectedProgram,
			DateType: parseInt(billType),
			FromDate: startDate,
			ToDate: endDate,
			StoreCode: storeWise,
			MobileNo: mobile,
			BillNo: billID,
			Status: status

		});
		const httpHeaders = new HttpHeaders({
			'content-type': 'application/json',
			'cache-control': 'no-cache'

		});
		const options = {
			headers: httpHeaders
		};
		return this.httpClient.post(environment[global.env].API_URL + '/api/Recon/DisplayErrorMessageCount', input, options);
	}
	getDuplicateData(selectedProgram, BillNo, BillDate, StoreCode) {

		const input = JSON.stringify({
			BrandMasterList: selectedProgram,
			BillNo,
			BillDate,
			StoreCode

		});
		const httpHeaders = new HttpHeaders({
			'content-type': 'application/json',
			'cache-control': 'no-cache'

		});
		const options = {
			headers: httpHeaders
		};
		return this.httpClient.post(environment[global.env].API_URL + '/api/Recon/DisplayCustomerDuplicateBillTransactions', input, options);
	}
	getReconSetupDetails(BrandId) {

		const input = JSON.stringify({
			BrandId: BrandId
		});
		const httpHeaders = new HttpHeaders({
			'content-type': 'application/json',
			'cache-control': 'no-cache'

		});
		const options = {
			headers: httpHeaders
		};
		return this.httpClient.post(environment[global.env].API_URL + '/api/Recon/GetReconDetailsByBrandID', input, options);
	}
	SaveFeedback(BrandId, feedback, active) {

		const input = JSON.stringify({
			BrandId: BrandId
		});
		const httpHeaders = new HttpHeaders({
			'content-type': 'application/json',
			'cache-control': 'no-cache'

		});
		const options = {
			headers: httpHeaders
		};
		return this.httpClient.post(environment[global.env].API_URL + '/api/Recon/BrandSetupConfirmationComment?Comment=' + feedback + '&isactive=' + active, input, options);
	}

	DQRReportData(searchFilterData) {
		console.log("dqr ", searchFilterData);
		// const input = JSON.stringify(searchFilterData);
		// const httpHeaders = new HttpHeaders({
		// 	'content-type': 'application/json',
		// 	'cache-control': 'no-cache'

		// });
		// const options = {
		// 	headers: httpHeaders
		// };
		return this.httpClient.get(environment[global.env].API_URL + '/api/Recon/DQRReportData?Program_Code=LoveYourBodyClub');
	}

	// GetDQRData(searchFilterData) {
	// 	console.log("dqr ", searchFilterData);
	// 	const input = JSON.stringify(searchFilterData);
	// 	const httpHeaders = new HttpHeaders({
	// 		'content-type': 'application/json',
	// 		'cache-control': 'no-cache'

	// 	});
	// 	const options = {
	// 		headers: httpHeaders
	// 	};
	// 	return this.httpClient.post(environment[global.env].API_URL + '/api/Recon/GetDQRData', input, options);
	// }


	GetReconStatus(searchFilterData) {
		console.log("summary ", searchFilterData);
		const input = JSON.stringify(searchFilterData);
		const httpHeaders = new HttpHeaders({
			'content-type': 'application/json',
			'cache-control': 'no-cache'

		});
		const options = {
			headers: httpHeaders
		};
		return this.httpClient.post(environment[global.env].API_URL + '/api/Recon/Recon_ReportSummary', input, options);
	}



	EditReconBasicDetailsByBrandID(brandId, isActive, isEnable, isDeleted) {
		const input = JSON.stringify({
			BrandId: brandId,
			IsActive: isActive,
			IsEnable: isEnable,
			IsDeleted: false
		});
		const httpHeaders = new HttpHeaders({
			'content-type': 'application/json',
			'cache-control': 'no-cache'

		});
		const options = {
			headers: httpHeaders
		};
		return this.httpClient.post(environment[global.env].API_URL + '/api/Recon/EditReconBasicDetailsByBrandID', input, options);
	}
	SaveGeneralSetting(reconGeneralDetail) {
		var dataReq = reconGeneralDetail.reconGeneralDetail
		const input = JSON.stringify(dataReq);
		const httpHeaders = new HttpHeaders({
			'content-type': 'application/json',
			'cache-control': 'no-cache'

		});
		const options = {
			headers: httpHeaders
		};
		return this.httpClient.post(environment[global.env].API_URL + '/api/Recon/SaveGeneralSetting', input, options);
	}
	SaveFileSetting(fileConfigDetail) {
		var dataReq = fileConfigDetail.fileConfigDetail
		const input = JSON.stringify(dataReq);
		const httpHeaders = new HttpHeaders({
			'content-type': 'application/json',
			'cache-control': 'no-cache'

		});
		const options = {
			headers: httpHeaders
		};
		return this.httpClient.post(environment[global.env].API_URL + '/api/Recon/SaveFileSetting', input, options);
	}
	SaveFolderSetting(folderConfigDetail) {
		var dataReq = folderConfigDetail.folderConfigDetail
		const input = JSON.stringify(dataReq);
		const httpHeaders = new HttpHeaders({
			'content-type': 'application/json',
			'cache-control': 'no-cache'

		});
		const options = {
			headers: httpHeaders
		};
		return this.httpClient.post(environment[global.env].API_URL + '/api/Recon/SaveFolderSetting', input, options);
	}
	SaveDQRSettingDetails(dqrConfigModel) {
		var dataReq = dqrConfigModel.dqrConfigModel
		const input = JSON.stringify(dataReq);
		const httpHeaders = new HttpHeaders({
			'content-type': 'application/json',
			'cache-control': 'no-cache'

		});
		const options = {
			headers: httpHeaders
		};
		return this.httpClient.post(environment[global.env].API_URL + '/api/Recon/SaveDQRSettingDetails', input, options);
	}
	SaveReconAlertSetting(reconAlertDetails) {
		var dataReq = reconAlertDetails.reconAlertDetails
		const input = JSON.stringify(dataReq);
		const httpHeaders = new HttpHeaders({
			'content-type': 'application/json',
			'cache-control': 'no-cache'

		});
		const options = {
			headers: httpHeaders
		};
		return this.httpClient.post(environment[global.env].API_URL + '/api/Recon/SaveReconAlertSetting', input, options);
	}
	SaveReconReportSetting(reconReportDetails) {
		var dataReq = reconReportDetails.reconReportDetails
		const input = JSON.stringify(dataReq);
		const httpHeaders = new HttpHeaders({
			'content-type': 'application/json',
			'cache-control': 'no-cache'

		});
		const options = {
			headers: httpHeaders
		};
		return this.httpClient.post(environment[global.env].API_URL + '/api/Recon/SaveReconReportSetting', input, options);
	}
	SaveConfigSetting(configSetting) {
		var dataReq = configSetting.configSetting
		const input = JSON.stringify(dataReq);
		const httpHeaders = new HttpHeaders({
			'content-type': 'application/json',
			'cache-control': 'no-cache'

		});
		const options = {
			headers: httpHeaders
		};
		return this.httpClient.post(environment[global.env].API_URL + '/api/Recon/SaveConfigSetting', input, options);
	}


	RedAlert(storeId, currentDate) {
		const input = JSON.stringify({
			"brandId": parseInt(storeId),
			"billdate": currentDate,
		});
		// console.log("input", input)
		const httpHeaders = new HttpHeaders({
			'content-type': 'application/json',
			'cache-control': 'no-cache'

		});
		const options = {
			headers: httpHeaders
		};
		return this.httpClient.post(environment[global.env].API_URL + '/api/Recon/RedAlert', input, options);


		//return this.httpClient.get('../../assets/data/GetAllActiveCommunicationSummary.json'); 
	}
	redALartStatus(brandId, userId, brandName, date, serviceType, feedbacktext, status) {
		const input = JSON.stringify({

			"brandid": brandId,
			"brandName": brandName,
			"date": date,
			"serviceType": serviceType,
			"comment": feedbacktext,
			"status": status,
			"userId": parseInt(userId)


		});
		const httpHeaders = new HttpHeaders({
			'content-type': 'application/json',
			'cache-control': 'no-cache'

		});
		const options = {
			headers: httpHeaders
		};
		return this.httpClient.post(environment[global.env].API_URL + '/api/Recon/AlertStatus', input, options);


	}


	getErrorList(ErrorType) {

		return this.httpClient.get(environment[global.env].API_URL + '/api/Recon/HardAndSoft_ErrorList?ErrorType=' + ErrorType);
	}

	RecondashboardFileUpload(fileType, filesToUpload) {


		// const formData = new FormData();
		// formData.append('fileToUpload',filesToUpload);
		// console.log("formData new", formData,"==",filesToUpload);

		const httpHeaders = new HttpHeaders({
			'cache-control': 'no-cache'
		});

		const options = {
			headers: httpHeaders
		};
		return this.httpClient.post(environment[global.env].API_URL + '/api/ReconService/RecondashboardFileUpload?FileType=' + fileType, filesToUpload, options);

	}


	
	RecondashboardFileValidate(fileType,lineSeperator,columnSeperator,filesToUpload) {


		// const formData = new FormData();
		// formData.append('fileToUpload',filesToUpload);
		// console.log("formData new", formData,"==",filesToUpload);

		const httpHeaders = new HttpHeaders({
			'cache-control': 'no-cache'
		});

		const options = {
			headers: httpHeaders
		};
		return this.httpClient.post(environment[global.env].API_URL + '/api/ReconService/RecondashboardFileValidate?FileType='+fileType+'&UserLineTerminator='+lineSeperator+'&UserCommaSeparator='+columnSeperator , filesToUpload, options);

	}



	getReconSummaryByBillDate(searchData){
		const input = JSON.stringify(searchData);
		const httpHeaders = new HttpHeaders({
			'content-type': 'application/json',
			'cache-control': 'no-cache'

		});
		const options = {
			headers: httpHeaders
		};
		return this.httpClient.post(environment[global.env].API_URL + '/api/Recon/GetReconSummaryByBillDate', input, options);

	}




	GetAllActiveCommunicationSummary(currentDate, userId) {
		const input = JSON.stringify({

			"tenantid": 0,
			"tenantCode": "",
			"requetDate": currentDate,
			"userID": parseInt(userId)

		});
		// console.log("input", input)
		const httpHeaders = new HttpHeaders({
			'content-type': 'application/json',
			'cache-control': 'no-cache'

		});
		const options = {
			headers: httpHeaders
		};
		return this.httpClient.post(environment[global.env].API_URL + '/api/DigitalReceipt/GetAllActiveCommunicationSummary', input, options);


		//return this.httpClient.get('../../assets/data/GetAllActiveCommunicationSummary.json'); 
	}
	GetSearchInovice(brandName, InvoiceNo, MobileNumber, StoreCode, currentDate) {
		const input = JSON.stringify({
			"tenantCode": brandName,
			"invoiceNo": InvoiceNo,
			"mobileNo": MobileNumber,
			"storeCode": StoreCode,
			"requetDate": currentDate
		});

		// console.log("input", input)
		const httpHeaders = new HttpHeaders({
			'content-type': 'application/json',
			'cache-control': 'no-cache'

		});
		const options = {
			headers: httpHeaders
		};
		return this.httpClient.post(environment[global.env].API_URL + '/api/DigitalReceipt/GetInvoiceBySearchCriteria', input, options);

		//return this.httpClient.get('../../assets/data/seachDataReponse.json'); 
	}
	GetTenentCods(userId) {

		return this.httpClient.post(environment[global.env].API_URL + '/api/DigitalReceipt/GetDREnableProgram?UserID=' + userId, null);


	}
	ResendData(inoviceDatas, searchTenantId, requestedBy) {

		const input = JSON.stringify({
			"progcode": inoviceDatas.progCode,
			"tenantID": searchTenantId.toString(),
			"storecode": inoviceDatas.storecode,
			"billNumber": inoviceDatas.billNo,
			"billDate": inoviceDatas.billDate,
			"source": "dashboard",
			"requestedBy": requestedBy,
			
		});

		const httpHeaders = new HttpHeaders({
			'content-type': 'application/json',
			'cache-control': 'no-cache'

		});
		const options = {
			headers: httpHeaders
		};
		return this.httpClient.post(environment[global.env].API_URL + '​/api/DigitalReceipt/ResendShortURL', input, options);

	}
	ResendFeedbackData(inoviceDatas) {
		const input = JSON.stringify({
			"transactionID": "",
			"billNo": inoviceDatas.billNo,
			"billDate": inoviceDatas.billDate,
			"storecode": inoviceDatas.storecode,
			"mobileNo": inoviceDatas.mobileNo,
			"emailID": inoviceDatas.emailID,
			"customerName": inoviceDatas.customerName,
			"progCode": inoviceDatas.progCode,
			"baseURL": inoviceDatas.baseURL,
			"bitly": inoviceDatas.shortURL,
			"feedbackURL": inoviceDatas.feedbackURL
		});

		// console.log("input", input)
		const httpHeaders = new HttpHeaders({
			'content-type': 'application/json',
			'cache-control': 'no-cache'

		});
		const options = {
			headers: httpHeaders
		};
		return this.httpClient.post(environment[global.env].API_URL + '​/api/DigitalReceipt/ResendFeedbackURL', input, options);

	}

	GetInvoiceBySummaryStatus(tanantcode, date, totalBillReceived, failedBill, successBill, isSMS, isWhatsApp, isSendEmail, isPrint,isOpenPercent) {
		const input = JSON.stringify({
			"tenantCode": tanantcode,
			"requestDate": date,
			"totalBillReceived": totalBillReceived,
			"failedBill": failedBill,
			"successBill": successBill,
			"isSMS": isSMS,
			"isWhatsApp": isWhatsApp,
			"isSendEmail": isSendEmail,
			"isPrint": isPrint,
			"isUniqueHit":isOpenPercent,
		});

		// console.log("input", input)
		const httpHeaders = new HttpHeaders({
			'content-type': 'application/json',
			'cache-control': 'no-cache'

		});
		const options = {
			headers: httpHeaders
		};
		return this.httpClient.post(environment[global.env].API_URL + '​/api/DigitalReceipt/GetInvoiceBySummaryStatus', input, options);

	}


	GetErrorWiseSummaryStatus(tanantcode, date, totalBillReceived, failedBill, successBill, isSMS, isWhatsApp, isSendEmail, errorMessage) {
		const input = JSON.stringify({
			"tenantCode": tanantcode,
			"requestDate": date,
			"totalBillReceived": totalBillReceived,
			"failedBill": failedBill,
			"successBill": successBill,
			"isSMS": isSMS,
			"isWhatsApp": isWhatsApp,
			"isSendEmail": isSendEmail,
			"errorMessage": errorMessage
		});


		const httpHeaders = new HttpHeaders({
			'content-type': 'application/json',
			'cache-control': 'no-cache'

		});
		const options = {
			headers: httpHeaders
		};
		return this.httpClient.post(environment[global.env].API_URL + '​/api/DigitalReceipt/GetErrorWiseSummaryStatus', input, options);

	}

	GetDRSummaryData(searchFilterData) {
		console.log("summary data", searchFilterData);


		let input = JSON.stringify(searchFilterData);
		const httpHeaders = new HttpHeaders({
			'content-type': 'application/json',
			'cache-control': 'no-cache'

		});
		const options = {
			headers: httpHeaders
		};
		return this.httpClient.post(environment[global.env].API_URL + '/api/DigitalReceipt/GetMonthWiseSummary', input, options);
	}

	GetDRSummaryDataStoreWise(searchFilterData) {
		console.log("summary  date store wise", searchFilterData);


		let input = JSON.stringify(searchFilterData);
		const httpHeaders = new HttpHeaders({
			'content-type': 'application/json',
			'cache-control': 'no-cache'

		});
		const options = {
			headers: httpHeaders
		};
		return this.httpClient.post(environment[global.env].API_URL + '/api/DigitalReceipt/GetStoreAndMonthWiseSummary', input, options);
	}

	DownloadMonthWiseSummary(tenantID, tenantcode, date, userId, toDate, reportType, month, year) {

		console.log("summary  date range new month");

		const input = JSON.stringify({
			"tenantid": tenantID,
			"tenantCode": tenantcode,
			"requetDate": date,
			"toDate": toDate,
			"reportType": reportType,
			"userID": userId,
			"month": month,
			"year": year

		});


		const httpHeaders = new HttpHeaders({
			'content-type': 'application/json',
			'cache-control': 'no-cache'

		});
		const options = {
			headers: httpHeaders
		};
		return this.httpClient.post(environment[global.env].API_URL + '/api/DigitalReceipt/DownloadMonthWiseSummary', input, options);

	}


	// storeWiseConsolideSummary(tenantID, tenantcode, date, userId,toDate,month, year){
	// 	console.log("summary  date range new month");

	// 	const input = JSON.stringify({
	// 		"tenantid": tenantID,
	// 		"tenantCode": tenantcode,
	// 		"requetDate": date,
	// 		"toDate":toDate,
	// 		"userID": userId,
	// 		"month": month,
	// 		"year": year

	// 	});


	// 	const httpHeaders = new HttpHeaders({
	// 		'content-type': 'application/json',
	// 		'cache-control': 'no-cache'

	// 	});
	// 	const options = {
	// 		headers: httpHeaders
	// 	};
	// 	return this.httpClient.post(environment[global.env].API_URL + '/api/DigitalReceipt/GetStoreWiseConsolideSummary', input, options);


	// }


	GetMonthWiseErrorSummary(tenantID, tenantcode, date, userId, endDate, month, year) {
		const input = JSON.stringify({
			"tenantid": tenantID,
			"tenantCode": tenantcode,
			"requetDate": date,
			"userID": userId,
			"toDate": endDate,
			"month": month,
			"year": year

		});


		const httpHeaders = new HttpHeaders({
			'content-type': 'application/json',
			'cache-control': 'no-cache'

		});
		const options = {
			headers: httpHeaders
		};
		return this.httpClient.post(environment[global.env].API_URL + '/api/DigitalReceipt/GetMonthWiseErrorSummary', input, options);

	}
	GetStoreCountSummary(userId, date, tenantcode, tenantID) {

		const input = JSON.stringify({
			"tenantid": tenantID,
			"tenantCode": tenantcode,
			"startDate": date,
			"endDate": date,
			"userID": parseInt(userId),


		});


		const httpHeaders = new HttpHeaders({
			'content-type': 'application/json',
			'cache-control': 'no-cache'

		});
		const options = {
			headers: httpHeaders
		};
		return this.httpClient.post(environment[global.env].API_URL + '/api/DigitalReceipt/GetStoreWiseConsolideSummary', input, options);

	}




	GetStoreWiseDetailSummary(tenantID, tenantcode, date, userId, storecode, registerNumber) {


		const input = JSON.stringify({
			"tenantid": tenantID,
			"tenantCode": tenantcode,
			"startDate": date,
			"endDate": date,
			"userID": parseInt(userId),
			"storecode": storecode,
			"registerNumber": registerNumber


		});


		const httpHeaders = new HttpHeaders({
			'content-type': 'application/json',
			'cache-control': 'no-cache'

		});
		const options = {
			headers: httpHeaders
		};
		return this.httpClient.post(environment[global.env].API_URL + '/api/DigitalReceipt/GetStoreWiseDetailSummary', input, options);

	}

	GetRawBillDetails(billNo, billDate, storeCode, brandId) {


		const input = JSON.stringify({
			"billNo": billNo,
			"billdate": billDate,
			"storeCode": storeCode,
			"brandId": brandId,

		});


		const httpHeaders = new HttpHeaders({
			'content-type': 'application/json',
			'cache-control': 'no-cache'

		});
		const options = {
			headers: httpHeaders
		};
		return this.httpClient.post(environment[global.env].API_URL + '/api/Recon/GetRawBillDetails', input, options);

	}


	
}

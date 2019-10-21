/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* global getAssetRegistry getParticipantRegistry */

/**
 * Close the bidding for a car listing and choose the
 * highest bid that is over the asking price
 * @param {com.betweak.carauction.CloseBidding} closeBidding - the closeBidding transaction
 * @transaction
 */
async function sampleTransaction(tx) {
    // Save the old value of the asset.
    const newlender= tx.newlender
	
	tx.Board.lender.push(newlender)
    
    
    
    // Get the asset registry for the asset.
    const BoardRegistry = await getAssetRegistry('com.betweak.carauction.Board');
    // Update the asset in the asset registry.
    await BoardRegistry.update(tx.Board);

   
}

